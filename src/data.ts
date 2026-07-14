export const profile = {
  name: 'Aniket Chakraborty',
  firstName: 'Aniket',
  role: 'Cloud Engineer',
  location: 'Liverpool, UK',
  email: 'aniket07chakraborty@gmail.com',
  phone: '+44 7587 678983',
  linkedin: 'https://linkedin.com/in/aniket-chakraborty07',
  github: 'https://github.com/aniketrick',
  resume: '/assets/Aniket_Chakraborty_CV.pdf',
}

export const technologies = [
  'AWS',
  'Terraform',
  'Kubernetes',
  'Docker',
  'ArgoCD',
  'GitHub Actions',
  'Jenkins',
  'Python',
  'Bash',
  'Linux',
  'CloudWatch',
  'Prometheus',
  'Grafana',
  'Ansible',
  'Amazon Bedrock',
]

export const stats = [
  { value: '74%', label: 'faster CI regression execution' },
  { value: '38%', label: 'fewer production defect escapes' },
  { value: '98%', label: 'on-time release delivery' },
  { value: '4', label: 'end-to-end cloud projects' },
]

export const skillGroups = [
  {
    title: 'Cloud & Infrastructure',
    description: 'Production-minded AWS architecture built with reusable Infrastructure as Code.',
    skills: ['AWS', 'Terraform', 'AWS CDK', 'CloudFormation', 'VPC', 'EC2', 'Lambda', 'S3', 'RDS', 'DynamoDB'],
  },
  {
    title: 'Containers & Delivery',
    description: 'Repeatable build, test and deployment workflows across containers and Kubernetes.',
    skills: ['Docker', 'Kubernetes', 'EKS', 'Helm', 'ArgoCD', 'GitOps', 'GitHub Actions', 'Jenkins', 'Ansible'],
  },
  {
    title: 'Reliability & Security',
    description: 'Observability, least-privilege access and resilient multi-AZ design from day one.',
    skills: ['CloudWatch', 'Prometheus', 'Grafana', 'IAM', 'RBAC', 'Cognito', 'TLS/HTTPS', 'Incident response'],
  },
  {
    title: 'Engineering',
    description: 'Automation and backend foundations for cloud-native platforms and APIs.',
    skills: ['Python', 'Bash', 'SQL', 'Node.js', 'REST APIs', 'Linux', 'TCP/IP', 'Agile/Scrum'],
  },
]

export const experiences = [
  {
    date: 'Jul 2025 — Present',
    role: 'Retail Trainee Manager',
    company: "Sainsbury's",
    location: 'Liverpool, UK',
    summary:
      'Promoted into a structured management programme, taking ownership of safe, efficient store operations and team delivery across Online and Nightshift functions.',
    highlights: [
      'Lead colleagues through high-volume operational periods and resolve first-line system or fulfilment issues.',
      'Use incident logging and recurring fault patterns to reduce repeat operational disruption.',
    ],
  },
  {
    date: 'Jan 2023 — Aug 2024',
    role: 'Independent Cloud Engineer',
    company: 'Self-directed projects',
    location: 'Remote',
    summary:
      'Designed and deployed four end-to-end AWS and Kubernetes platforms using Terraform, AWS CDK, GitHub Actions and ArgoCD with no manual deployment steps.',
    highlights: [
      'Built multi-AZ networking, serverless APIs, event-driven AI processing and GitOps delivery platforms.',
      'Applied monitoring, alerting, least-privilege IAM, Kubernetes RBAC and cost-aware infrastructure design.',
    ],
  },
  {
    date: 'Jan 2022 — Dec 2022',
    role: 'Quality Engineering & Automation Analyst',
    company: 'Cognizant Technology Solutions',
    location: 'Kolkata, India',
    summary:
      'Improved CI reliability and release quality across a large Agile programme through automation, parallel execution and stronger quality gates.',
    highlights: [
      'Cut regression runtime from 3.5 hours to 55 minutes by optimising Jenkins agents and parallel Kubernetes execution.',
      'Reduced production defect escapes by 38% and maintained 98% on-time delivery through triage and root-cause analysis.',
    ],
  },
]

export const projects = [
  {
    number: '01',
    title: 'AI-Powered Enterprise Document Analyser',
    eyebrow: 'Event-driven AI platform',
    description:
      'A resilient document-processing pipeline that extracts content, removes sensitive data and produces AI-generated summaries with authenticated access.',
    outcomes: [
      'Independent retries at each processing stage through EventBridge and SQS.',
      'PII detection before storage with Cognito JWT authentication and attribute-based access control.',
      'Textract extraction and Amazon Bedrock summarisation in a serverless workflow.',
    ],
    stack: ['S3', 'EventBridge', 'SQS', 'Textract', 'Comprehend', 'Bedrock', 'Cognito', 'DynamoDB'],
    visual: ['Upload', 'Queue', 'Extract', 'Protect', 'Summarise'],
    accent: 'violet',
  },
  {
    number: '02',
    title: 'Multi-AZ VPC with ALB & Auto Scaling',
    eyebrow: 'Highly available AWS infrastructure',
    description:
      'A modular Terraform architecture spanning two Availability Zones with controlled network paths, automatic scaling and operational monitoring.',
    outcomes: [
      'Public and private subnets across two Availability Zones with an internet-facing ALB.',
      'EC2 instances accept application traffic only from the load balancer security group.',
      'CloudWatch alarms provide CPU and health visibility for the Auto Scaling Group.',
    ],
    stack: ['VPC', 'ALB', 'EC2', 'Auto Scaling', 'Route Tables', 'CloudWatch', 'Terraform', 'GitHub Actions'],
    visual: ['Internet', 'ALB', 'AZ-A', 'AZ-B', 'CloudWatch'],
    accent: 'cyan',
  },
  {
    number: '03',
    title: 'GitOps Kubernetes Platform',
    eyebrow: 'Automated container delivery',
    description:
      'A reproducible Kubernetes platform where Git is the single source of truth and every application change is reconciled automatically by ArgoCD.',
    outcomes: [
      'Multi-node Kubernetes cluster provisioned through Terraform and Helm.',
      'Namespace-scoped RBAC and network policies for safer workload isolation.',
      'Prometheus and Grafana dashboards with deployment and infrastructure alerting.',
    ],
    stack: ['Terraform', 'Kubernetes', 'ArgoCD', 'Helm', 'Prometheus', 'Grafana', 'RBAC', 'GitOps'],
    visual: ['Git', 'ArgoCD', 'Kubernetes', 'Metrics', 'Alerts'],
    accent: 'blue',
  },
  {
    number: '04',
    title: 'Serverless Cloud Task Manager',
    eyebrow: 'API and delivery automation',
    description:
      'A serverless REST API with component-scoped permissions, automated validation and deployment, and CloudWatch alerting for errors and latency spikes.',
    outcomes: [
      'Lambda and API Gateway backend defined and deployed through Terraform.',
      'GitHub Actions pipeline handles build, test and deployment automatically.',
      'Least-privilege IAM and CloudWatch alarms improve security and operability.',
    ],
    stack: ['Lambda', 'API Gateway', 'Terraform', 'GitHub Actions', 'CloudWatch', 'Docker', 'IAM', 'REST API'],
    visual: ['Client', 'API', 'Lambda', 'Data', 'Monitor'],
    accent: 'amber',
  },
]

export const education = [
  {
    degree: 'MSc Computer Science (2:1)',
    institution: 'University of Liverpool',
    date: 'Sep 2024 — Sep 2025',
    detail: 'Cloud Security, Distributed Systems and Machine Learning',
  },
  {
    degree: 'BTech Electronics & Instrumentation Engineering (83%)',
    institution: 'Narula Institute of Technology',
    date: '2018 — 2022',
    detail: 'Finalist, IIC National Innovation Contest and Best Hardware Project Award',
  },
]

export const certifications = [
  { name: 'AWS Certified Solutions Architect — Associate', status: 'Certified' },
  { name: 'HashiCorp Terraform Associate', status: 'In progress' },
  { name: 'Certified Kubernetes Administrator (CKA)', status: 'In progress' },
]
