# PutCreditCardsMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCards** | Pointer to [**[]CreditCardMappingType**](CreditCardMappingType.md) | Information about an external system credit card mapping. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutCreditCardsMappingRequest

`func NewPutCreditCardsMappingRequest() *PutCreditCardsMappingRequest`

NewPutCreditCardsMappingRequest instantiates a new PutCreditCardsMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutCreditCardsMappingRequestWithDefaults

`func NewPutCreditCardsMappingRequestWithDefaults() *PutCreditCardsMappingRequest`

NewPutCreditCardsMappingRequestWithDefaults instantiates a new PutCreditCardsMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCards

`func (o *PutCreditCardsMappingRequest) GetCreditCards() []CreditCardMappingType`

GetCreditCards returns the CreditCards field if non-nil, zero value otherwise.

### GetCreditCardsOk

`func (o *PutCreditCardsMappingRequest) GetCreditCardsOk() (*[]CreditCardMappingType, bool)`

GetCreditCardsOk returns a tuple with the CreditCards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCards

`func (o *PutCreditCardsMappingRequest) SetCreditCards(v []CreditCardMappingType)`

SetCreditCards sets CreditCards field to given value.

### HasCreditCards

`func (o *PutCreditCardsMappingRequest) HasCreditCards() bool`

HasCreditCards returns a boolean if a field has been set.

### GetLinks

`func (o *PutCreditCardsMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutCreditCardsMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutCreditCardsMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutCreditCardsMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutCreditCardsMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutCreditCardsMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutCreditCardsMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutCreditCardsMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


