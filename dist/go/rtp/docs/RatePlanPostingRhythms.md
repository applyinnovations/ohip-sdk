# RatePlanPostingRhythms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**PostingRhythms** | Pointer to [**[]RatePlanAdvancedPostingRhythmType**](RatePlanAdvancedPostingRhythmType.md) | Posting rhythm details for a rate plan containing Buy x Get y functionality. | [optional] 
**RatePlan** | Pointer to [**GenericHotelCodeCodeType**](GenericHotelCodeCodeType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlanPostingRhythms

`func NewRatePlanPostingRhythms() *RatePlanPostingRhythms`

NewRatePlanPostingRhythms instantiates a new RatePlanPostingRhythms object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanPostingRhythmsWithDefaults

`func NewRatePlanPostingRhythmsWithDefaults() *RatePlanPostingRhythms`

NewRatePlanPostingRhythmsWithDefaults instantiates a new RatePlanPostingRhythms object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RatePlanPostingRhythms) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlanPostingRhythms) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlanPostingRhythms) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlanPostingRhythms) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetPostingRhythms

`func (o *RatePlanPostingRhythms) GetPostingRhythms() []RatePlanAdvancedPostingRhythmType`

GetPostingRhythms returns the PostingRhythms field if non-nil, zero value otherwise.

### GetPostingRhythmsOk

`func (o *RatePlanPostingRhythms) GetPostingRhythmsOk() (*[]RatePlanAdvancedPostingRhythmType, bool)`

GetPostingRhythmsOk returns a tuple with the PostingRhythms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostingRhythms

`func (o *RatePlanPostingRhythms) SetPostingRhythms(v []RatePlanAdvancedPostingRhythmType)`

SetPostingRhythms sets PostingRhythms field to given value.

### HasPostingRhythms

`func (o *RatePlanPostingRhythms) HasPostingRhythms() bool`

HasPostingRhythms returns a boolean if a field has been set.

### GetRatePlan

`func (o *RatePlanPostingRhythms) GetRatePlan() GenericHotelCodeCodeType`

GetRatePlan returns the RatePlan field if non-nil, zero value otherwise.

### GetRatePlanOk

`func (o *RatePlanPostingRhythms) GetRatePlanOk() (*GenericHotelCodeCodeType, bool)`

GetRatePlanOk returns a tuple with the RatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlan

`func (o *RatePlanPostingRhythms) SetRatePlan(v GenericHotelCodeCodeType)`

SetRatePlan sets RatePlan field to given value.

### HasRatePlan

`func (o *RatePlanPostingRhythms) HasRatePlan() bool`

HasRatePlan returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlanPostingRhythms) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlanPostingRhythms) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlanPostingRhythms) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlanPostingRhythms) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

