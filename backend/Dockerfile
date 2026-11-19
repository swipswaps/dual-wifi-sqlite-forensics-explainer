FROM python:3.12-slim

RUN apt-get update && apt-get install -y --no-install-recommends openssh-client && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir -r /app/requirements.txt

COPY app.py schema.sql /app/
RUN mkdir -p /var/lib/forensics-explainer /run/host-ssh

ENV FORENSICS_DB_PATH=/var/lib/forensics-explainer/forensics.db
EXPOSE 8000

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]
