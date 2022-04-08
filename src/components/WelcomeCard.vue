<template>
    <v-row>
        <!-- congratulations anand -->
        <v-col
            cols="12"
            md="8"
            order="1"
            order-md="2"
            class="align-self-end mb-10 mt-sm-10 mt-md-0"
        >
            <v-card class="ps-3">
                <v-row>
                    <v-col
                        cols="8"
                        sm="6"
                    >
                        <v-card-title class="page-title flex-nowrap text-2xl">
                            <span class="text-no-wrap">Congratulations</span>
                            <span class="text-no-wrap font-weight-bold mx-1">Anand!</span>
                            <span>🎉</span>
                        </v-card-title>
                        <v-card-text>
                            You are about to reach a new milestone of
                            <b> Rs. 3 Crores </b> in asset.
                        </v-card-text>
                    </v-col>
                    <v-col
                        cols="4"
                        sm="6"
                    >
                        <div>
                            <v-img
                                width="120"
                                src="@/assets/images/misc/tree-4.png"
                                class="gamification-tree-4"
                            />
                            <v-img
                                width="128"
                                src="@/assets/images/3d-characters/pose-2.png"
                                class="gamification-john-pose-2"
                            />
                            <v-img
                                width="100"
                                src="@/assets/images/misc/tree.png"
                                class="gamification-tree"
                            />
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
.triangle-card {
  position: relative;
  .triangle-bg {
    position: absolute;
    bottom: 0;
    @include ltr() {
      right: 0;
    }
    @include rtl() {
      left: 0;
    }
  }
  .gamification-trophy {
    position: absolute;
    bottom: 10%;
    @include ltr() {
      right: 8%;
    }
    @include rtl() {
      left: 8%;
    }
  }
}
.gamification-tree-4,
.gamification-john-pose-2,
.gamification-tree {
  position: absolute;
}
.gamification-tree {
  top: 10%;
  @include ltr() {
    right: 0;
  }
  @include rtl() {
    left: 0;
  }
}
.gamification-john-pose-2 {
  bottom: 0;
  @include ltr() {
    right: 15%;
  }
  @include rtl() {
    left: 15%;
  }
}
.gamification-tree-4 {
  bottom: 0;
  @include ltr() {
    right: 30%;
  }
  @include rtl() {
    left: 35%;
  }
}

@media (max-width: 600px) {
  .gamification-tree,
  .gamification-tree-4 {
    display: none;
  }
  .gamification-john-pose-2 {
    @include ltr() {
      right: 5%;
    }
    @include rtl() {
      left: 5%;
    }
  }
}

@media (max-width: 500px) {
  .gamification-john-pose-2 {
    max-width: 70px;
  }
}

@media (max-width: 400px) {
  .page-title {
    font-size: 1.2rem !important;
  }
}
</style>
