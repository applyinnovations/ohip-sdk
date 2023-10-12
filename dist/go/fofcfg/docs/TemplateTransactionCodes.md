# TemplateTransactionCodes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TransactionCodes** | Pointer to [**[]TemplateTransactionCodeType**](TemplateTransactionCodeType.md) | Template transaction code configuration details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTemplateTransactionCodes

`func NewTemplateTransactionCodes() *TemplateTransactionCodes`

NewTemplateTransactionCodes instantiates a new TemplateTransactionCodes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateTransactionCodesWithDefaults

`func NewTemplateTransactionCodesWithDefaults() *TemplateTransactionCodes`

NewTemplateTransactionCodesWithDefaults instantiates a new TemplateTransactionCodes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTransactionCodes

`func (o *TemplateTransactionCodes) GetTransactionCodes() []TemplateTransactionCodeType`

GetTransactionCodes returns the TransactionCodes field if non-nil, zero value otherwise.

### GetTransactionCodesOk

`func (o *TemplateTransactionCodes) GetTransactionCodesOk() (*[]TemplateTransactionCodeType, bool)`

GetTransactionCodesOk returns a tuple with the TransactionCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCodes

`func (o *TemplateTransactionCodes) SetTransactionCodes(v []TemplateTransactionCodeType)`

SetTransactionCodes sets TransactionCodes field to given value.

### HasTransactionCodes

`func (o *TemplateTransactionCodes) HasTransactionCodes() bool`

HasTransactionCodes returns a boolean if a field has been set.

### GetLinks

`func (o *TemplateTransactionCodes) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TemplateTransactionCodes) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TemplateTransactionCodes) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TemplateTransactionCodes) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TemplateTransactionCodes) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TemplateTransactionCodes) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TemplateTransactionCodes) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TemplateTransactionCodes) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


