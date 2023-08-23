# StartSetRatePlansHeadersProcessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RatePlans** | Pointer to [**[]RatePlanType**](RatePlanType.md) | Rate plan code details to be created. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewStartSetRatePlansHeadersProcessRequest

`func NewStartSetRatePlansHeadersProcessRequest() *StartSetRatePlansHeadersProcessRequest`

NewStartSetRatePlansHeadersProcessRequest instantiates a new StartSetRatePlansHeadersProcessRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStartSetRatePlansHeadersProcessRequestWithDefaults

`func NewStartSetRatePlansHeadersProcessRequestWithDefaults() *StartSetRatePlansHeadersProcessRequest`

NewStartSetRatePlansHeadersProcessRequestWithDefaults instantiates a new StartSetRatePlansHeadersProcessRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRatePlans

`func (o *StartSetRatePlansHeadersProcessRequest) GetRatePlans() []RatePlanType`

GetRatePlans returns the RatePlans field if non-nil, zero value otherwise.

### GetRatePlansOk

`func (o *StartSetRatePlansHeadersProcessRequest) GetRatePlansOk() (*[]RatePlanType, bool)`

GetRatePlansOk returns a tuple with the RatePlans field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRatePlans

`func (o *StartSetRatePlansHeadersProcessRequest) SetRatePlans(v []RatePlanType)`

SetRatePlans sets RatePlans field to given value.

### HasRatePlans

`func (o *StartSetRatePlansHeadersProcessRequest) HasRatePlans() bool`

HasRatePlans returns a boolean if a field has been set.

### GetLinks

`func (o *StartSetRatePlansHeadersProcessRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *StartSetRatePlansHeadersProcessRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *StartSetRatePlansHeadersProcessRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *StartSetRatePlansHeadersProcessRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *StartSetRatePlansHeadersProcessRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *StartSetRatePlansHeadersProcessRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *StartSetRatePlansHeadersProcessRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *StartSetRatePlansHeadersProcessRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


