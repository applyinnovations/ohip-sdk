# CreateActivityStatusCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityStatusCodes** | Pointer to [**[]ActivityStatusCodeType**](ActivityStatusCodeType.md) | Activity Status Codes object. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewCreateActivityStatusCodes

`func NewCreateActivityStatusCodes() *CreateActivityStatusCodes`

NewCreateActivityStatusCodes instantiates a new CreateActivityStatusCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreateActivityStatusCodesWithDefaults

`func NewCreateActivityStatusCodesWithDefaults() *CreateActivityStatusCodes`

NewCreateActivityStatusCodesWithDefaults instantiates a new CreateActivityStatusCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityStatusCodes

`func (o *CreateActivityStatusCodes) GetActivityStatusCodes() []ActivityStatusCodeType`

GetActivityStatusCodes returns the ActivityStatusCodes field if non-nil, zero value otherwise.

### GetActivityStatusCodesOk

`func (o *CreateActivityStatusCodes) GetActivityStatusCodesOk() (*[]ActivityStatusCodeType, bool)`

GetActivityStatusCodesOk returns a tuple with the ActivityStatusCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityStatusCodes

`func (o *CreateActivityStatusCodes) SetActivityStatusCodes(v []ActivityStatusCodeType)`

SetActivityStatusCodes sets ActivityStatusCodes field to given value.

### HasActivityStatusCodes

`func (o *CreateActivityStatusCodes) HasActivityStatusCodes() bool`

HasActivityStatusCodes returns a boolean if a field has been set.

### GetLinks

`func (o *CreateActivityStatusCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreateActivityStatusCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreateActivityStatusCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreateActivityStatusCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreateActivityStatusCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreateActivityStatusCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreateActivityStatusCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreateActivityStatusCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


