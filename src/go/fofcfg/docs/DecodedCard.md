# DecodedCard

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCard** | Pointer to [**ResPaymentCardType**](ResPaymentCardType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewDecodedCard

`func NewDecodedCard() *DecodedCard`

NewDecodedCard instantiates a new DecodedCard object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDecodedCardWithDefaults

`func NewDecodedCardWithDefaults() *DecodedCard`

NewDecodedCardWithDefaults instantiates a new DecodedCard object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCard

`func (o *DecodedCard) GetCreditCard() ResPaymentCardType`

GetCreditCard returns the CreditCard field if non-nil, zero value otherwise.

### GetCreditCardOk

`func (o *DecodedCard) GetCreditCardOk() (*ResPaymentCardType, bool)`

GetCreditCardOk returns a tuple with the CreditCard field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCard

`func (o *DecodedCard) SetCreditCard(v ResPaymentCardType)`

SetCreditCard sets CreditCard field to given value.

### HasCreditCard

`func (o *DecodedCard) HasCreditCard() bool`

HasCreditCard returns a boolean if a field has been set.

### GetLinks

`func (o *DecodedCard) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *DecodedCard) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *DecodedCard) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *DecodedCard) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *DecodedCard) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *DecodedCard) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *DecodedCard) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *DecodedCard) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


