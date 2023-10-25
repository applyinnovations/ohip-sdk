# PostRatePlanRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RatePlan** | Pointer to [**RatePlanType**](RatePlanType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostRatePlanRequest

`func NewPostRatePlanRequest() *PostRatePlanRequest`

NewPostRatePlanRequest instantiates a new PostRatePlanRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRatePlanRequestWithDefaults

`func NewPostRatePlanRequestWithDefaults() *PostRatePlanRequest`

NewPostRatePlanRequestWithDefaults instantiates a new PostRatePlanRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *PostRatePlanRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRatePlanRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRatePlanRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRatePlanRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRatePlan

`func (o *PostRatePlanRequest) GetRatePlan() RatePlanType`

GetRatePlan returns the RatePlan field if non-nil, zero value otherwise.

### GetRatePlanOk

`func (o *PostRatePlanRequest) GetRatePlanOk() (*RatePlanType, bool)`

GetRatePlanOk returns a tuple with the RatePlan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlan

`func (o *PostRatePlanRequest) SetRatePlan(v RatePlanType)`

SetRatePlan sets RatePlan field to given value.

### HasRatePlan

`func (o *PostRatePlanRequest) HasRatePlan() bool`

HasRatePlan returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRatePlanRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRatePlanRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRatePlanRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRatePlanRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


