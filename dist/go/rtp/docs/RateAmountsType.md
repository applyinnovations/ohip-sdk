# RateAmountsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BaseAmount** | Pointer to **float32** |  | [optional] 
**OnePersonRate** | Pointer to **float32** | Rate amount for one person. | [optional] 
**TwoPersonsRate** | Pointer to **float32** | Rate amount for two persons. | [optional] 
**ThreePersonsRate** | Pointer to **float32** | Rate amount for three persons. | [optional] 
**FourPersonsRate** | Pointer to **float32** | Rate amount for four persons. | [optional] 
**FivePersonsRate** | Pointer to **float32** | Rate amount for five persons. | [optional] 
**ExtraPersonRate** | Pointer to **float32** | Rate amount for each extra person. | [optional] 
**ExtraChildRate** | Pointer to **float32** | Rate amount for the extra child.. | [optional] 
**OneChildRate** | Pointer to **float32** | Rate amount for one Child. | [optional] 
**TwoChildrenRate** | Pointer to **float32** | Rate amount for two Children. | [optional] 
**ThreeChildrenRate** | Pointer to **float32** | Rate amount for three Children. | [optional] 
**FourChildrenRate** | Pointer to **float32** | Rate amount for four Children. | [optional] 
**RateByAgeBuckets** | Pointer to [**[]RateByAgeBucketType**](RateByAgeBucketType.md) | Rate amount by age bucket. | [optional] 

## Methods

### NewRateAmountsType

`func NewRateAmountsType() *RateAmountsType`

NewRateAmountsType instantiates a new RateAmountsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateAmountsTypeWithDefaults

`func NewRateAmountsTypeWithDefaults() *RateAmountsType`

NewRateAmountsTypeWithDefaults instantiates a new RateAmountsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBaseAmount

`func (o *RateAmountsType) GetBaseAmount() float32`

GetBaseAmount returns the BaseAmount field if non-nil, zero value otherwise.

### GetBaseAmountOk

`func (o *RateAmountsType) GetBaseAmountOk() (*float32, bool)`

GetBaseAmountOk returns a tuple with the BaseAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBaseAmount

`func (o *RateAmountsType) SetBaseAmount(v float32)`

SetBaseAmount sets BaseAmount field to given value.

### HasBaseAmount

`func (o *RateAmountsType) HasBaseAmount() bool`

HasBaseAmount returns a boolean if a field has been set.

### GetOnePersonRate

`func (o *RateAmountsType) GetOnePersonRate() float32`

GetOnePersonRate returns the OnePersonRate field if non-nil, zero value otherwise.

### GetOnePersonRateOk

`func (o *RateAmountsType) GetOnePersonRateOk() (*float32, bool)`

GetOnePersonRateOk returns a tuple with the OnePersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOnePersonRate

`func (o *RateAmountsType) SetOnePersonRate(v float32)`

SetOnePersonRate sets OnePersonRate field to given value.

### HasOnePersonRate

`func (o *RateAmountsType) HasOnePersonRate() bool`

HasOnePersonRate returns a boolean if a field has been set.

### GetTwoPersonsRate

`func (o *RateAmountsType) GetTwoPersonsRate() float32`

GetTwoPersonsRate returns the TwoPersonsRate field if non-nil, zero value otherwise.

### GetTwoPersonsRateOk

`func (o *RateAmountsType) GetTwoPersonsRateOk() (*float32, bool)`

GetTwoPersonsRateOk returns a tuple with the TwoPersonsRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoPersonsRate

`func (o *RateAmountsType) SetTwoPersonsRate(v float32)`

SetTwoPersonsRate sets TwoPersonsRate field to given value.

### HasTwoPersonsRate

`func (o *RateAmountsType) HasTwoPersonsRate() bool`

HasTwoPersonsRate returns a boolean if a field has been set.

### GetThreePersonsRate

`func (o *RateAmountsType) GetThreePersonsRate() float32`

GetThreePersonsRate returns the ThreePersonsRate field if non-nil, zero value otherwise.

### GetThreePersonsRateOk

`func (o *RateAmountsType) GetThreePersonsRateOk() (*float32, bool)`

GetThreePersonsRateOk returns a tuple with the ThreePersonsRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreePersonsRate

`func (o *RateAmountsType) SetThreePersonsRate(v float32)`

SetThreePersonsRate sets ThreePersonsRate field to given value.

### HasThreePersonsRate

`func (o *RateAmountsType) HasThreePersonsRate() bool`

HasThreePersonsRate returns a boolean if a field has been set.

### GetFourPersonsRate

`func (o *RateAmountsType) GetFourPersonsRate() float32`

GetFourPersonsRate returns the FourPersonsRate field if non-nil, zero value otherwise.

### GetFourPersonsRateOk

`func (o *RateAmountsType) GetFourPersonsRateOk() (*float32, bool)`

GetFourPersonsRateOk returns a tuple with the FourPersonsRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFourPersonsRate

`func (o *RateAmountsType) SetFourPersonsRate(v float32)`

SetFourPersonsRate sets FourPersonsRate field to given value.

### HasFourPersonsRate

`func (o *RateAmountsType) HasFourPersonsRate() bool`

HasFourPersonsRate returns a boolean if a field has been set.

### GetFivePersonsRate

`func (o *RateAmountsType) GetFivePersonsRate() float32`

GetFivePersonsRate returns the FivePersonsRate field if non-nil, zero value otherwise.

### GetFivePersonsRateOk

`func (o *RateAmountsType) GetFivePersonsRateOk() (*float32, bool)`

GetFivePersonsRateOk returns a tuple with the FivePersonsRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFivePersonsRate

`func (o *RateAmountsType) SetFivePersonsRate(v float32)`

SetFivePersonsRate sets FivePersonsRate field to given value.

### HasFivePersonsRate

`func (o *RateAmountsType) HasFivePersonsRate() bool`

HasFivePersonsRate returns a boolean if a field has been set.

### GetExtraPersonRate

`func (o *RateAmountsType) GetExtraPersonRate() float32`

GetExtraPersonRate returns the ExtraPersonRate field if non-nil, zero value otherwise.

### GetExtraPersonRateOk

`func (o *RateAmountsType) GetExtraPersonRateOk() (*float32, bool)`

GetExtraPersonRateOk returns a tuple with the ExtraPersonRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraPersonRate

`func (o *RateAmountsType) SetExtraPersonRate(v float32)`

SetExtraPersonRate sets ExtraPersonRate field to given value.

### HasExtraPersonRate

`func (o *RateAmountsType) HasExtraPersonRate() bool`

HasExtraPersonRate returns a boolean if a field has been set.

### GetExtraChildRate

`func (o *RateAmountsType) GetExtraChildRate() float32`

GetExtraChildRate returns the ExtraChildRate field if non-nil, zero value otherwise.

### GetExtraChildRateOk

`func (o *RateAmountsType) GetExtraChildRateOk() (*float32, bool)`

GetExtraChildRateOk returns a tuple with the ExtraChildRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExtraChildRate

`func (o *RateAmountsType) SetExtraChildRate(v float32)`

SetExtraChildRate sets ExtraChildRate field to given value.

### HasExtraChildRate

`func (o *RateAmountsType) HasExtraChildRate() bool`

HasExtraChildRate returns a boolean if a field has been set.

### GetOneChildRate

`func (o *RateAmountsType) GetOneChildRate() float32`

GetOneChildRate returns the OneChildRate field if non-nil, zero value otherwise.

### GetOneChildRateOk

`func (o *RateAmountsType) GetOneChildRateOk() (*float32, bool)`

GetOneChildRateOk returns a tuple with the OneChildRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOneChildRate

`func (o *RateAmountsType) SetOneChildRate(v float32)`

SetOneChildRate sets OneChildRate field to given value.

### HasOneChildRate

`func (o *RateAmountsType) HasOneChildRate() bool`

HasOneChildRate returns a boolean if a field has been set.

### GetTwoChildrenRate

`func (o *RateAmountsType) GetTwoChildrenRate() float32`

GetTwoChildrenRate returns the TwoChildrenRate field if non-nil, zero value otherwise.

### GetTwoChildrenRateOk

`func (o *RateAmountsType) GetTwoChildrenRateOk() (*float32, bool)`

GetTwoChildrenRateOk returns a tuple with the TwoChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTwoChildrenRate

`func (o *RateAmountsType) SetTwoChildrenRate(v float32)`

SetTwoChildrenRate sets TwoChildrenRate field to given value.

### HasTwoChildrenRate

`func (o *RateAmountsType) HasTwoChildrenRate() bool`

HasTwoChildrenRate returns a boolean if a field has been set.

### GetThreeChildrenRate

`func (o *RateAmountsType) GetThreeChildrenRate() float32`

GetThreeChildrenRate returns the ThreeChildrenRate field if non-nil, zero value otherwise.

### GetThreeChildrenRateOk

`func (o *RateAmountsType) GetThreeChildrenRateOk() (*float32, bool)`

GetThreeChildrenRateOk returns a tuple with the ThreeChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetThreeChildrenRate

`func (o *RateAmountsType) SetThreeChildrenRate(v float32)`

SetThreeChildrenRate sets ThreeChildrenRate field to given value.

### HasThreeChildrenRate

`func (o *RateAmountsType) HasThreeChildrenRate() bool`

HasThreeChildrenRate returns a boolean if a field has been set.

### GetFourChildrenRate

`func (o *RateAmountsType) GetFourChildrenRate() float32`

GetFourChildrenRate returns the FourChildrenRate field if non-nil, zero value otherwise.

### GetFourChildrenRateOk

`func (o *RateAmountsType) GetFourChildrenRateOk() (*float32, bool)`

GetFourChildrenRateOk returns a tuple with the FourChildrenRate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFourChildrenRate

`func (o *RateAmountsType) SetFourChildrenRate(v float32)`

SetFourChildrenRate sets FourChildrenRate field to given value.

### HasFourChildrenRate

`func (o *RateAmountsType) HasFourChildrenRate() bool`

HasFourChildrenRate returns a boolean if a field has been set.

### GetRateByAgeBuckets

`func (o *RateAmountsType) GetRateByAgeBuckets() []RateByAgeBucketType`

GetRateByAgeBuckets returns the RateByAgeBuckets field if non-nil, zero value otherwise.

### GetRateByAgeBucketsOk

`func (o *RateAmountsType) GetRateByAgeBucketsOk() (*[]RateByAgeBucketType, bool)`

GetRateByAgeBucketsOk returns a tuple with the RateByAgeBuckets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateByAgeBuckets

`func (o *RateAmountsType) SetRateByAgeBuckets(v []RateByAgeBucketType)`

SetRateByAgeBuckets sets RateByAgeBuckets field to given value.

### HasRateByAgeBuckets

`func (o *RateAmountsType) HasRateByAgeBuckets() bool`

HasRateByAgeBuckets returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


