# CreditCardWallet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CreditCardInfoList** | Pointer to [**[]CreditCardInfo**](CreditCardInfo.md) | Contains a list of credit cards. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewCreditCardWallet

`func NewCreditCardWallet() *CreditCardWallet`

NewCreditCardWallet instantiates a new CreditCardWallet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCreditCardWalletWithDefaults

`func NewCreditCardWalletWithDefaults() *CreditCardWallet`

NewCreditCardWalletWithDefaults instantiates a new CreditCardWallet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCreditCardInfoList

`func (o *CreditCardWallet) GetCreditCardInfoList() []CreditCardInfo`

GetCreditCardInfoList returns the CreditCardInfoList field if non-nil, zero value otherwise.

### GetCreditCardInfoListOk

`func (o *CreditCardWallet) GetCreditCardInfoListOk() (*[]CreditCardInfo, bool)`

GetCreditCardInfoListOk returns a tuple with the CreditCardInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditCardInfoList

`func (o *CreditCardWallet) SetCreditCardInfoList(v []CreditCardInfo)`

SetCreditCardInfoList sets CreditCardInfoList field to given value.

### HasCreditCardInfoList

`func (o *CreditCardWallet) HasCreditCardInfoList() bool`

HasCreditCardInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *CreditCardWallet) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *CreditCardWallet) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *CreditCardWallet) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *CreditCardWallet) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *CreditCardWallet) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *CreditCardWallet) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *CreditCardWallet) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *CreditCardWallet) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


