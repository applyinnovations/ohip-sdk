# ChangeActivityStatusCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ActivityStatusCodes** | Pointer to [**[]ActivityStatusCodeType**](ActivityStatusCodeType.md) | Activity Status Codes object. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeActivityStatusCodes

`func NewChangeActivityStatusCodes() *ChangeActivityStatusCodes`

NewChangeActivityStatusCodes instantiates a new ChangeActivityStatusCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeActivityStatusCodesWithDefaults

`func NewChangeActivityStatusCodesWithDefaults() *ChangeActivityStatusCodes`

NewChangeActivityStatusCodesWithDefaults instantiates a new ChangeActivityStatusCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivityStatusCodes

`func (o *ChangeActivityStatusCodes) GetActivityStatusCodes() []ActivityStatusCodeType`

GetActivityStatusCodes returns the ActivityStatusCodes field if non-nil, zero value otherwise.

### GetActivityStatusCodesOk

`func (o *ChangeActivityStatusCodes) GetActivityStatusCodesOk() (*[]ActivityStatusCodeType, bool)`

GetActivityStatusCodesOk returns a tuple with the ActivityStatusCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityStatusCodes

`func (o *ChangeActivityStatusCodes) SetActivityStatusCodes(v []ActivityStatusCodeType)`

SetActivityStatusCodes sets ActivityStatusCodes field to given value.

### HasActivityStatusCodes

`func (o *ChangeActivityStatusCodes) HasActivityStatusCodes() bool`

HasActivityStatusCodes returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeActivityStatusCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeActivityStatusCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeActivityStatusCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeActivityStatusCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeActivityStatusCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeActivityStatusCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeActivityStatusCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeActivityStatusCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


