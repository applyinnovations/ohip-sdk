# RatePlanAdvancedPostingRhythmType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code identifying the posting rhythm within the rate plan. | [optional] 
**Description** | Pointer to **string** | Description of the posting rhythm offer. | [optional] 
**BeginSellDate** | Pointer to **string** | Date which the posting rhythm becomes applicable. | [optional] 
**EndSellDate** | Pointer to **string** | Date which the posting rhythm ceases to be applicable. | [optional] 
**RequiredPaidNights** | Pointer to **int32** | The number of nights which are required to be paid in order to receive free nights. | [optional] 
**EligibleFreeNights** | Pointer to **int32** | The number of free nights which are eligible when the number of required paid nights has been met. | [optional] 
**RepeatWithinStay** | Pointer to **bool** | Indicates if the posting rhythm offer can be repeated more than once during the entire stay. | [optional] 
**RepeatWithinSellSegment** | Pointer to **bool** | Indicates if the posting rhythm offer can be repeated more than once within a specific sell segment of the reservation. | [optional] 

## Methods

### NewRatePlanAdvancedPostingRhythmType

`func NewRatePlanAdvancedPostingRhythmType() *RatePlanAdvancedPostingRhythmType`

NewRatePlanAdvancedPostingRhythmType instantiates a new RatePlanAdvancedPostingRhythmType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanAdvancedPostingRhythmTypeWithDefaults

`func NewRatePlanAdvancedPostingRhythmTypeWithDefaults() *RatePlanAdvancedPostingRhythmType`

NewRatePlanAdvancedPostingRhythmTypeWithDefaults instantiates a new RatePlanAdvancedPostingRhythmType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RatePlanAdvancedPostingRhythmType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RatePlanAdvancedPostingRhythmType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RatePlanAdvancedPostingRhythmType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RatePlanAdvancedPostingRhythmType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RatePlanAdvancedPostingRhythmType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RatePlanAdvancedPostingRhythmType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RatePlanAdvancedPostingRhythmType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RatePlanAdvancedPostingRhythmType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetBeginSellDate

`func (o *RatePlanAdvancedPostingRhythmType) GetBeginSellDate() string`

GetBeginSellDate returns the BeginSellDate field if non-nil, zero value otherwise.

### GetBeginSellDateOk

`func (o *RatePlanAdvancedPostingRhythmType) GetBeginSellDateOk() (*string, bool)`

GetBeginSellDateOk returns a tuple with the BeginSellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginSellDate

`func (o *RatePlanAdvancedPostingRhythmType) SetBeginSellDate(v string)`

SetBeginSellDate sets BeginSellDate field to given value.

### HasBeginSellDate

`func (o *RatePlanAdvancedPostingRhythmType) HasBeginSellDate() bool`

HasBeginSellDate returns a boolean if a field has been set.

### GetEndSellDate

`func (o *RatePlanAdvancedPostingRhythmType) GetEndSellDate() string`

GetEndSellDate returns the EndSellDate field if non-nil, zero value otherwise.

### GetEndSellDateOk

`func (o *RatePlanAdvancedPostingRhythmType) GetEndSellDateOk() (*string, bool)`

GetEndSellDateOk returns a tuple with the EndSellDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndSellDate

`func (o *RatePlanAdvancedPostingRhythmType) SetEndSellDate(v string)`

SetEndSellDate sets EndSellDate field to given value.

### HasEndSellDate

`func (o *RatePlanAdvancedPostingRhythmType) HasEndSellDate() bool`

HasEndSellDate returns a boolean if a field has been set.

### GetRequiredPaidNights

`func (o *RatePlanAdvancedPostingRhythmType) GetRequiredPaidNights() int32`

GetRequiredPaidNights returns the RequiredPaidNights field if non-nil, zero value otherwise.

### GetRequiredPaidNightsOk

`func (o *RatePlanAdvancedPostingRhythmType) GetRequiredPaidNightsOk() (*int32, bool)`

GetRequiredPaidNightsOk returns a tuple with the RequiredPaidNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequiredPaidNights

`func (o *RatePlanAdvancedPostingRhythmType) SetRequiredPaidNights(v int32)`

SetRequiredPaidNights sets RequiredPaidNights field to given value.

### HasRequiredPaidNights

`func (o *RatePlanAdvancedPostingRhythmType) HasRequiredPaidNights() bool`

HasRequiredPaidNights returns a boolean if a field has been set.

### GetEligibleFreeNights

`func (o *RatePlanAdvancedPostingRhythmType) GetEligibleFreeNights() int32`

GetEligibleFreeNights returns the EligibleFreeNights field if non-nil, zero value otherwise.

### GetEligibleFreeNightsOk

`func (o *RatePlanAdvancedPostingRhythmType) GetEligibleFreeNightsOk() (*int32, bool)`

GetEligibleFreeNightsOk returns a tuple with the EligibleFreeNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEligibleFreeNights

`func (o *RatePlanAdvancedPostingRhythmType) SetEligibleFreeNights(v int32)`

SetEligibleFreeNights sets EligibleFreeNights field to given value.

### HasEligibleFreeNights

`func (o *RatePlanAdvancedPostingRhythmType) HasEligibleFreeNights() bool`

HasEligibleFreeNights returns a boolean if a field has been set.

### GetRepeatWithinStay

`func (o *RatePlanAdvancedPostingRhythmType) GetRepeatWithinStay() bool`

GetRepeatWithinStay returns the RepeatWithinStay field if non-nil, zero value otherwise.

### GetRepeatWithinStayOk

`func (o *RatePlanAdvancedPostingRhythmType) GetRepeatWithinStayOk() (*bool, bool)`

GetRepeatWithinStayOk returns a tuple with the RepeatWithinStay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepeatWithinStay

`func (o *RatePlanAdvancedPostingRhythmType) SetRepeatWithinStay(v bool)`

SetRepeatWithinStay sets RepeatWithinStay field to given value.

### HasRepeatWithinStay

`func (o *RatePlanAdvancedPostingRhythmType) HasRepeatWithinStay() bool`

HasRepeatWithinStay returns a boolean if a field has been set.

### GetRepeatWithinSellSegment

`func (o *RatePlanAdvancedPostingRhythmType) GetRepeatWithinSellSegment() bool`

GetRepeatWithinSellSegment returns the RepeatWithinSellSegment field if non-nil, zero value otherwise.

### GetRepeatWithinSellSegmentOk

`func (o *RatePlanAdvancedPostingRhythmType) GetRepeatWithinSellSegmentOk() (*bool, bool)`

GetRepeatWithinSellSegmentOk returns a tuple with the RepeatWithinSellSegment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRepeatWithinSellSegment

`func (o *RatePlanAdvancedPostingRhythmType) SetRepeatWithinSellSegment(v bool)`

SetRepeatWithinSellSegment sets RepeatWithinSellSegment field to given value.

### HasRepeatWithinSellSegment

`func (o *RatePlanAdvancedPostingRhythmType) HasRepeatWithinSellSegment() bool`

HasRepeatWithinSellSegment returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


