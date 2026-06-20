import type { LucideIcon } from "lucide-react"
import {
  Activity,
  BarChart3,
  Box,
  Cloud,
  GitBranch,
  Globe,
  Network,
  Package,
  Rocket,
  Route,
} from "lucide-react"

export type TourSlide = {
  id: number
  topic: string
  title: string
  description: string
  screenshotLabel: string
  screenshot?: string
  iframeSrc?: string
  icon: LucideIcon
  character: "/aziz1.png" | "/aziz2.png" | "/aziz3.png"
}

export const TOUR_SLIDES: TourSlide[] = [
  {
    id: 1,
    topic: "Portfolio",
    title: "Live at azyz.me",
    description:
      "This portfolio is not just a website — it's a full production-grade deployment running on a real Kubernetes cluster hosted on Microsoft Azure. Every tool you see below was used to bring it to life.",
    screenshotLabel: "azyz.me in browser",
    screenshot: "/tour/01-portfolio.png",
    icon: Globe,
    character: "/aziz3.png",
  },
  {
    id: 2,
    topic: "Docker",
    title: "Containerized with Docker",
    description:
      "The app is packaged into a Docker image, ensuring it runs the same way in every environment — local, CI, or production.",
    screenshotLabel: "docker build success terminal",
    screenshot: "/tour/02-docker.png",
    icon: Box,
    character: "/aziz2.png",
  },
  {
    id: 3,
    topic: "GitHub",
    title: "Version controlled on GitHub",
    description:
      "All code is tracked with Git and hosted on GitHub, enabling collaboration, history, and automation triggers.",
    screenshotLabel: "GitHub repo",
    screenshot: "/tour/03-github.png",
    icon: GitBranch,
    character: "/aziz1.png",
  },
  {
    id: 4,
    topic: "Docker Hub",
    title: "Image published to Docker Hub",
    description:
      "After passing all CI checks, the Docker image is automatically built and pushed to Docker Hub, ready to be pulled by any server anywhere in the world.",
    screenshotLabel: "Docker Hub repository",
    screenshot: "/tour/05-docker-hub.png",
    icon: Package,
    character: "/aziz2.png",
  },
  {
    id: 5,
    topic: "k3s Deployment",
    title: "Orchestrated with Kubernetes (k3s)",
    description:
      "The app runs inside a Kubernetes cluster managed by k3s — a lightweight production-grade Kubernetes distribution. Kubernetes handles availability, restarts, and rolling updates automatically.",
    screenshotLabel: "kubectl get pods showing Running",
    screenshot: "/tour/06-k3s.png",
    icon: Network,
    character: "/aziz1.png",
  },
  {
    id: 6,
    topic: "Azure VM",
    title: "Hosted on Microsoft Azure",
    description:
      "The Kubernetes cluster runs on a virtual machine provisioned on Microsoft Azure, giving the portfolio a real public IP and enterprise-grade cloud infrastructure.",
    screenshotLabel: "Azure Portal VM running",
    screenshot: "/tour/01-portfolio.png",
    icon: Cloud,
    character: "/aziz2.png",
  },
  {
    id: 7,
    topic: "Ingress",
    title: "Traffic routing with Traefik Ingress",
    description:
      "Traefik acts as the reverse proxy and ingress controller, routing all incoming HTTP traffic from the domain directly to the portfolio container inside the cluster.",
    screenshotLabel: "kubectl get ingress",
    screenshot: "/tour/08-ingress.png",
    icon: Route,
    character: "/aziz3.png",
  },
  {
    id: 8,
    topic: "Domain",
    title: "Custom domain azyz.me",
    description:
      "A custom .me domain registered through Namecheap points directly to the Azure VM's public IP, making the portfolio accessible at a professional personal address.",
    screenshotLabel: "Namecheap DNS records",
    screenshot: "/tour/09-domain.png",
    icon: Globe,
    character: "/aziz1.png",
  },
  {
    id: 9,
    topic: "Prometheus",
    title: "Metrics collection with Prometheus",
    description:
      "Prometheus continuously scrapes metrics from the Kubernetes cluster, nodes, and pods — tracking CPU usage, memory consumption, request counts, and more in real time.",
    screenshotLabel: "Prometheus targets page",
    screenshot: "/tour/11-prometheus.png",
    icon: Activity,
    character: "/aziz1.png",
  },
  {
    id: 10,
    topic: "Grafana",
    title: "Visualized with Grafana",
    description:
      "Grafana transforms raw Prometheus metrics into beautiful dashboards, giving full visibility into the health and performance of the cluster and the portfolio app.",
    screenshotLabel: "Grafana dashboard",
    iframeSrc:
      "http://grafana.azyz.me/d/7d57716318ee0dddbac5a7f451fb7753/node-exporter-nodes?orgId=1&from=now-1h&to=now&timezone=utc&var-datasource=prometheus&var-cluster=$__all&var-instance=10.0.0.4:9100&refresh=30s&kiosk",
    icon: BarChart3,
    character: "/aziz1.png",
  },
  {
    id: 11,
    topic: "Automatic Deployment",
    title: "Full CI/CD — push to deploy",
    description:
      "The crown jewel of this setup: a single git push triggers the entire pipeline — code quality checks, Docker build, image push, and automatic deployment to the live Kubernetes cluster on Azure. Zero manual steps.",
    screenshotLabel: "GitHub Actions showing Deploy to VM green",
    screenshot: "/tour/04-ci-pipeline.png",
    icon: Rocket,
    character: "/aziz3.png",
  },
]

export const TOUR_OPEN_EVENT = "open-deployment-tour"
