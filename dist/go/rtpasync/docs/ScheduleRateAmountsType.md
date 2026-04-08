# ScheduleRateAmountsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OnePersonRate** | Pointer to **float32** | Rate amount for one person. | [optional] 
**TwoPersonRate** | Pointer to **float32** | Rate amount for two persons. | [optional] 
**ThreePersonRate** | Pointer to **float32** | Rate amount for three persons. | [optional] 
**FourPersonRate** | Pointer to **float32** | Rate amount for four persons. | [optional] 
**FivePersonRate** | Pointer to **float32** | Rate amount for five persons. | [optional] 
**ExtraPersonRate** | Pointer to **float32** | Rate amount for each extra person. | [optional] 
**ExtraChildRate** | Pointer to **float32** | Rate amount for each extra Child. | [optional] 
**OneChildRate** | Pointer to **float32** | Rate amount for one Child. | [optional] 
**TwoChildrenRate** | Pointer to **float32** | Rate amount for two Children. | [optional] 
**ThreeChildrenRate** | Pointer to **float32** | Rate amount for three Children. | [optional] 
**FourChildrenRate** | Pointer to **float32** | Rate amount for four Children. | [optional] 
**RateByAgeBuckets** | Pointer to [**[]RateByAgeBucketType**](RateByAgeBucketType.md) | Rate amount by age bucket. | [optional] 
**MinimumChildrenForFreeStay** | Pointer to **int32** | Minimum number of children needed to get free stay. | [optional] 
**PointsRequired** | Pointer to **float32** | The number of award points required for applying this rate plan schedule. | [optional] 
**OverrideFloorAmount** | Pointer to **bool** | true if floor amount needs to be override | [optional] 

## Methods

### NewScheduleRateAmountsType

`func NewScheduleRateAmountsType() *ScheduleRateAmountsType`

NewScheduleRateAmountsType instantiates a new ScheduleRateAmountsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewScheduleRateAmountsTypeWithDefaults

`func NewScheduleRateAmountsTypeWithDefaults() *ScheduleRateAmountsType`

NewScheduleRateAmountsTypeWithDefaults instantiates a new ScheduleRateAmountsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOnePersonRate

`func (o *ScheduleRateAmountsType) GetOnePersonRate() float32`

GetOnePersonRate returns the OnePersonRate field if non-nil, zero value otherwise.

### GetOnePersonRateOk

`func (o *ScheduleRateAmountsType) GetOnePersonRateOk() (*float32, bool)`

GetOnePersonRateOk returns a tuple with the OnePersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnePersonRate

`func (o *ScheduleRateAmountsType) SetOnePersonRate(v float32)`

SetOnePersonRate sets OnePersonRate field to given value.

### HasOnePersonRate

`func (o *ScheduleRateAmountsType) HasOnePersonRate() bool`

HasOnePersonRate returns a boolean if a field has been set.

### GetTwoPersonRate

`func (o *ScheduleRateAmountsType) GetTwoPersonRate() float32`

GetTwoPersonRate returns the TwoPersonRate field if non-nil, zero value otherwise.

### GetTwoPersonRateOk

`func (o *ScheduleRateAmountsType) GetTwoPersonRateOk() (*float32, bool)`

GetTwoPersonRateOk returns a tuple with the TwoPersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoPersonRate

`func (o *ScheduleRateAmountsType) SetTwoPersonRate(v float32)`

SetTwoPersonRate sets TwoPersonRate field to given value.

### HasTwoPersonRate

`func (o *ScheduleRateAmountsType) HasTwoPersonRate() bool`

HasTwoPersonRate returns a boolean if a field has been set.

### GetThreePersonRate

`func (o *ScheduleRateAmountsType) GetThreePersonRate() float32`

GetThreePersonRate returns the ThreePersonRate field if non-nil, zero value otherwise.

### GetThreePersonRateOk

`func (o *ScheduleRateAmountsType) GetThreePersonRateOk() (*float32, bool)`

GetThreePersonRateOk returns a tuple with the ThreePersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreePersonRate

`func (o *ScheduleRateAmountsType) SetThreePersonRate(v float32)`

SetThreePersonRate sets ThreePersonRate field to given value.

### HasThreePersonRate

`func (o *ScheduleRateAmountsType) HasThreePersonRate() bool`

HasThreePersonRate returns a boolean if a field has been set.

### GetFourPersonRate

`func (o *ScheduleRateAmountsType) GetFourPersonRate() float32`

GetFourPersonRate returns the FourPersonRate field if non-nil, zero value otherwise.

### GetFourPersonRateOk

`func (o *ScheduleRateAmountsType) GetFourPersonRateOk() (*float32, bool)`

GetFourPersonRateOk returns a tuple with the FourPersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFourPersonRate

`func (o *ScheduleRateAmountsType) SetFourPersonRate(v float32)`

SetFourPersonRate sets FourPersonRate field to given value.

### HasFourPersonRate

`func (o *ScheduleRateAmountsType) HasFourPersonRate() bool`

HasFourPersonRate returns a boolean if a field has been set.

### GetFivePersonRate

`func (o *ScheduleRateAmountsType) GetFivePersonRate() float32`

GetFivePersonRate returns the FivePersonRate field if non-nil, zero value otherwise.

### GetFivePersonRateOk

`func (o *ScheduleRateAmountsType) GetFivePersonRateOk() (*float32, bool)`

GetFivePersonRateOk returns a tuple with the FivePersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFivePersonRate

`func (o *ScheduleRateAmountsType) SetFivePersonRate(v float32)`

SetFivePersonRate sets FivePersonRate field to given value.

### HasFivePersonRate

`func (o *ScheduleRateAmountsType) HasFivePersonRate() bool`

HasFivePersonRate returns a boolean if a field has been set.

### GetExtraPersonRate

`func (o *ScheduleRateAmountsType) GetExtraPersonRate() float32`

GetExtraPersonRate returns the ExtraPersonRate field if non-nil, zero value otherwise.

### GetExtraPersonRateOk

`func (o *ScheduleRateAmountsType) GetExtraPersonRateOk() (*float32, bool)`

GetExtraPersonRateOk returns a tuple with the ExtraPersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraPersonRate

`func (o *ScheduleRateAmountsType) SetExtraPersonRate(v float32)`

SetExtraPersonRate sets ExtraPersonRate field to given value.

### HasExtraPersonRate

`func (o *ScheduleRateAmountsType) HasExtraPersonRate() bool`

HasExtraPersonRate returns a boolean if a field has been set.

### GetExtraChildRate

`func (o *ScheduleRateAmountsType) GetExtraChildRate() float32`

GetExtraChildRate returns the ExtraChildRate field if non-nil, zero value otherwise.

### GetExtraChildRateOk

`func (o *ScheduleRateAmountsType) GetExtraChildRateOk() (*float32, bool)`

GetExtraChildRateOk returns a tuple with the ExtraChildRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraChildRate

`func (o *ScheduleRateAmountsType) SetExtraChildRate(v float32)`

SetExtraChildRate sets ExtraChildRate field to given value.

### HasExtraChildRate

`func (o *ScheduleRateAmountsType) HasExtraChildRate() bool`

HasExtraChildRate returns a boolean if a field has been set.

### GetOneChildRate

`func (o *ScheduleRateAmountsType) GetOneChildRate() float32`

GetOneChildRate returns the OneChildRate field if non-nil, zero value otherwise.

### GetOneChildRateOk

`func (o *ScheduleRateAmountsType) GetOneChildRateOk() (*float32, bool)`

GetOneChildRateOk returns a tuple with the OneChildRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOneChildRate

`func (o *ScheduleRateAmountsType) SetOneChildRate(v float32)`

SetOneChildRate sets OneChildRate field to given value.

### HasOneChildRate

`func (o *ScheduleRateAmountsType) HasOneChildRate() bool`

HasOneChildRate returns a boolean if a field has been set.

### GetTwoChildrenRate

`func (o *ScheduleRateAmountsType) GetTwoChildrenRate() float32`

GetTwoChildrenRate returns the TwoChildrenRate field if non-nil, zero value otherwise.

### GetTwoChildrenRateOk

`func (o *ScheduleRateAmountsType) GetTwoChildrenRateOk() (*float32, bool)`

GetTwoChildrenRateOk returns a tuple with the TwoChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoChildrenRate

`func (o *ScheduleRateAmountsType) SetTwoChildrenRate(v float32)`

SetTwoChildrenRate sets TwoChildrenRate field to given value.

### HasTwoChildrenRate

`func (o *ScheduleRateAmountsType) HasTwoChildrenRate() bool`

HasTwoChildrenRate returns a boolean if a field has been set.

### GetThreeChildrenRate

`func (o *ScheduleRateAmountsType) GetThreeChildrenRate() float32`

GetThreeChildrenRate returns the ThreeChildrenRate field if non-nil, zero value otherwise.

### GetThreeChildrenRateOk

`func (o *ScheduleRateAmountsType) GetThreeChildrenRateOk() (*float32, bool)`

GetThreeChildrenRateOk returns a tuple with the ThreeChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreeChildrenRate

`func (o *ScheduleRateAmountsType) SetThreeChildrenRate(v float32)`

SetThreeChildrenRate sets ThreeChildrenRate field to given value.

### HasThreeChildrenRate

`func (o *ScheduleRateAmountsType) HasThreeChildrenRate() bool`

HasThreeChildrenRate returns a boolean if a field has been set.

### GetFourChildrenRate

`func (o *ScheduleRateAmountsType) GetFourChildrenRate() float32`

GetFourChildrenRate returns the FourChildrenRate field if non-nil, zero value otherwise.

### GetFourChildrenRateOk

`func (o *ScheduleRateAmountsType) GetFourChildrenRateOk() (*float32, bool)`

GetFourChildrenRateOk returns a tuple with the FourChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFourChildrenRate

`func (o *ScheduleRateAmountsType) SetFourChildrenRate(v float32)`

SetFourChildrenRate sets FourChildrenRate field to given value.

### HasFourChildrenRate

`func (o *ScheduleRateAmountsType) HasFourChildrenRate() bool`

HasFourChildrenRate returns a boolean if a field has been set.

### GetRateByAgeBuckets

`func (o *ScheduleRateAmountsType) GetRateByAgeBuckets() []RateByAgeBucketType`

GetRateByAgeBuckets returns the RateByAgeBuckets field if non-nil, zero value otherwise.

### GetRateByAgeBucketsOk

`func (o *ScheduleRateAmountsType) GetRateByAgeBucketsOk() (*[]RateByAgeBucketType, bool)`

GetRateByAgeBucketsOk returns a tuple with the RateByAgeBuckets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateByAgeBuckets

`func (o *ScheduleRateAmountsType) SetRateByAgeBuckets(v []RateByAgeBucketType)`

SetRateByAgeBuckets sets RateByAgeBuckets field to given value.

### HasRateByAgeBuckets

`func (o *ScheduleRateAmountsType) HasRateByAgeBuckets() bool`

HasRateByAgeBuckets returns a boolean if a field has been set.

### GetMinimumChildrenForFreeStay

`func (o *ScheduleRateAmountsType) GetMinimumChildrenForFreeStay() int32`

GetMinimumChildrenForFreeStay returns the MinimumChildrenForFreeStay field if non-nil, zero value otherwise.

### GetMinimumChildrenForFreeStayOk

`func (o *ScheduleRateAmountsType) GetMinimumChildrenForFreeStayOk() (*int32, bool)`

GetMinimumChildrenForFreeStayOk returns a tuple with the MinimumChildrenForFreeStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMinimumChildrenForFreeStay

`func (o *ScheduleRateAmountsType) SetMinimumChildrenForFreeStay(v int32)`

SetMinimumChildrenForFreeStay sets MinimumChildrenForFreeStay field to given value.

### HasMinimumChildrenForFreeStay

`func (o *ScheduleRateAmountsType) HasMinimumChildrenForFreeStay() bool`

HasMinimumChildrenForFreeStay returns a boolean if a field has been set.

### GetPointsRequired

`func (o *ScheduleRateAmountsType) GetPointsRequired() float32`

GetPointsRequired returns the PointsRequired field if non-nil, zero value otherwise.

### GetPointsRequiredOk

`func (o *ScheduleRateAmountsType) GetPointsRequiredOk() (*float32, bool)`

GetPointsRequiredOk returns a tuple with the PointsRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPointsRequired

`func (o *ScheduleRateAmountsType) SetPointsRequired(v float32)`

SetPointsRequired sets PointsRequired field to given value.

### HasPointsRequired

`func (o *ScheduleRateAmountsType) HasPointsRequired() bool`

HasPointsRequired returns a boolean if a field has been set.

### GetOverrideFloorAmount

`func (o *ScheduleRateAmountsType) GetOverrideFloorAmount() bool`

GetOverrideFloorAmount returns the OverrideFloorAmount field if non-nil, zero value otherwise.

### GetOverrideFloorAmountOk

`func (o *ScheduleRateAmountsType) GetOverrideFloorAmountOk() (*bool, bool)`

GetOverrideFloorAmountOk returns a tuple with the OverrideFloorAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOverrideFloorAmount

`func (o *ScheduleRateAmountsType) SetOverrideFloorAmount(v bool)`

SetOverrideFloorAmount sets OverrideFloorAmount field to given value.

### HasOverrideFloorAmount

`func (o *ScheduleRateAmountsType) HasOverrideFloorAmount() bool`

HasOverrideFloorAmount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


