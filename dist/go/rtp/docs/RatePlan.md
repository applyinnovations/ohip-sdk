# RatePlan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlan** | Pointer to [**RatePlanType**](RatePlanType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRatePlan

`func NewRatePlan() *RatePlan`

NewRatePlan instantiates a new RatePlan object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRatePlanWithDefaults

`func NewRatePlanWithDefaults() *RatePlan`

NewRatePlanWithDefaults instantiates a new RatePlan object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlan

`func (o *RatePlan) GetRatePlan() RatePlanType`

GetRatePlan returns the RatePlan field if non-nil, zero value otherwise.

### GetRatePlanOk

`func (o *RatePlan) GetRatePlanOk() (*RatePlanType, bool)`

GetRatePlanOk returns a tuple with the RatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlan

`func (o *RatePlan) SetRatePlan(v RatePlanType)`

SetRatePlan sets RatePlan field to given value.

### HasRatePlan

`func (o *RatePlan) HasRatePlan() bool`

HasRatePlan returns a boolean if a field has been set.

### GetLinks

`func (o *RatePlan) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RatePlan) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RatePlan) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RatePlan) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RatePlan) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RatePlan) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RatePlan) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RatePlan) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


