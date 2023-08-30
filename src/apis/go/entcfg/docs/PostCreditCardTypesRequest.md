# PostCreditCardTypesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCardTypes** | Pointer to [**[]CreditCardTypeType**](CreditCardTypeType.md) | List of Credit Card Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostCreditCardTypesRequest

`func NewPostCreditCardTypesRequest() *PostCreditCardTypesRequest`

NewPostCreditCardTypesRequest instantiates a new PostCreditCardTypesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostCreditCardTypesRequestWithDefaults

`func NewPostCreditCardTypesRequestWithDefaults() *PostCreditCardTypesRequest`

NewPostCreditCardTypesRequestWithDefaults instantiates a new PostCreditCardTypesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCardTypes

`func (o *PostCreditCardTypesRequest) GetCreditCardTypes() []CreditCardTypeType`

GetCreditCardTypes returns the CreditCardTypes field if non-nil, zero value otherwise.

### GetCreditCardTypesOk

`func (o *PostCreditCardTypesRequest) GetCreditCardTypesOk() (*[]CreditCardTypeType, bool)`

GetCreditCardTypesOk returns a tuple with the CreditCardTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardTypes

`func (o *PostCreditCardTypesRequest) SetCreditCardTypes(v []CreditCardTypeType)`

SetCreditCardTypes sets CreditCardTypes field to given value.

### HasCreditCardTypes

`func (o *PostCreditCardTypesRequest) HasCreditCardTypes() bool`

HasCreditCardTypes returns a boolean if a field has been set.

### GetLinks

`func (o *PostCreditCardTypesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostCreditCardTypesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostCreditCardTypesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostCreditCardTypesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostCreditCardTypesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostCreditCardTypesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostCreditCardTypesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostCreditCardTypesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


