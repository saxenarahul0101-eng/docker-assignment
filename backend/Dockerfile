FROM python:3.10-alpine

WORKDIR /app

ADD requirements.txt .

RUN pip install -r requirements.txt

ADD . .

EXPOSE 5000

ENTRYPOINT [ "python" ]

CMD [ "app.py" ]