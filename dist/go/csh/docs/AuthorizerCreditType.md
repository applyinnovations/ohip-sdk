# AuthorizerCreditType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthorizerId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**AuthorizerUserName** | Pointer to **string** | Application user name of the authorizer | [optional] 
**AuthorizerName** | Pointer to **string** | Full name of the authorizer. | [optional] 
**AuthorizerRateCode** | Pointer to **string** | Rate code of the authorizer. | [optional] 
**InheritAuthorizerRateCode** | Pointer to **bool** | Indicates whether user has the choice to have reservation inherit rate code from the authorizer. | [optional] 
**HotelId** | Pointer to **string** | Identifies the hotel code. | [optional] 
**CreditLimit** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ActualAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**AuthorizerCreditDetails** | Pointer to [**[]AuthorizerCreditDetailType**](AuthorizerCreditDetailType.md) | List of Comp Accounting Authorizers details | [optional] 
**TransactionDate** | Pointer to **string** | Transaction Date associated with the transaction. | [optional] 

## Methods

### NewAuthorizerCreditType

`func NewAuthorizerCreditType() *AuthorizerCreditType`

NewAuthorizerCreditType instantiates a new AuthorizerCreditType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAuthorizerCreditTypeWithDefaults

`func NewAuthorizerCreditTypeWithDefaults() *AuthorizerCreditType`

NewAuthorizerCreditTypeWithDefaults instantiates a new AuthorizerCreditType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthorizerId

`func (o *AuthorizerCreditType) GetAuthorizerId() UniqueIDType`

GetAuthorizerId returns the AuthorizerId field if non-nil, zero value otherwise.

### GetAuthorizerIdOk

`func (o *AuthorizerCreditType) GetAuthorizerIdOk() (*UniqueIDType, bool)`

GetAuthorizerIdOk returns a tuple with the AuthorizerId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerId

`func (o *AuthorizerCreditType) SetAuthorizerId(v UniqueIDType)`

SetAuthorizerId sets AuthorizerId field to given value.

### HasAuthorizerId

`func (o *AuthorizerCreditType) HasAuthorizerId() bool`

HasAuthorizerId returns a boolean if a field has been set.

### GetAuthorizerUserName

`func (o *AuthorizerCreditType) GetAuthorizerUserName() string`

GetAuthorizerUserName returns the AuthorizerUserName field if non-nil, zero value otherwise.

### GetAuthorizerUserNameOk

`func (o *AuthorizerCreditType) GetAuthorizerUserNameOk() (*string, bool)`

GetAuthorizerUserNameOk returns a tuple with the AuthorizerUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerUserName

`func (o *AuthorizerCreditType) SetAuthorizerUserName(v string)`

SetAuthorizerUserName sets AuthorizerUserName field to given value.

### HasAuthorizerUserName

`func (o *AuthorizerCreditType) HasAuthorizerUserName() bool`

HasAuthorizerUserName returns a boolean if a field has been set.

### GetAuthorizerName

`func (o *AuthorizerCreditType) GetAuthorizerName() string`

GetAuthorizerName returns the AuthorizerName field if non-nil, zero value otherwise.

### GetAuthorizerNameOk

`func (o *AuthorizerCreditType) GetAuthorizerNameOk() (*string, bool)`

GetAuthorizerNameOk returns a tuple with the AuthorizerName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerName

`func (o *AuthorizerCreditType) SetAuthorizerName(v string)`

SetAuthorizerName sets AuthorizerName field to given value.

### HasAuthorizerName

`func (o *AuthorizerCreditType) HasAuthorizerName() bool`

HasAuthorizerName returns a boolean if a field has been set.

### GetAuthorizerRateCode

`func (o *AuthorizerCreditType) GetAuthorizerRateCode() string`

GetAuthorizerRateCode returns the AuthorizerRateCode field if non-nil, zero value otherwise.

### GetAuthorizerRateCodeOk

`func (o *AuthorizerCreditType) GetAuthorizerRateCodeOk() (*string, bool)`

GetAuthorizerRateCodeOk returns a tuple with the AuthorizerRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerRateCode

`func (o *AuthorizerCreditType) SetAuthorizerRateCode(v string)`

SetAuthorizerRateCode sets AuthorizerRateCode field to given value.

### HasAuthorizerRateCode

`func (o *AuthorizerCreditType) HasAuthorizerRateCode() bool`

HasAuthorizerRateCode returns a boolean if a field has been set.

### GetInheritAuthorizerRateCode

`func (o *AuthorizerCreditType) GetInheritAuthorizerRateCode() bool`

GetInheritAuthorizerRateCode returns the InheritAuthorizerRateCode field if non-nil, zero value otherwise.

### GetInheritAuthorizerRateCodeOk

`func (o *AuthorizerCreditType) GetInheritAuthorizerRateCodeOk() (*bool, bool)`

GetInheritAuthorizerRateCodeOk returns a tuple with the InheritAuthorizerRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInheritAuthorizerRateCode

`func (o *AuthorizerCreditType) SetInheritAuthorizerRateCode(v bool)`

SetInheritAuthorizerRateCode sets InheritAuthorizerRateCode field to given value.

### HasInheritAuthorizerRateCode

`func (o *AuthorizerCreditType) HasInheritAuthorizerRateCode() bool`

HasInheritAuthorizerRateCode returns a boolean if a field has been set.

### GetHotelId

`func (o *AuthorizerCreditType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AuthorizerCreditType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AuthorizerCreditType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AuthorizerCreditType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCreditLimit

`func (o *AuthorizerCreditType) GetCreditLimit() CurrencyAmountType`

GetCreditLimit returns the CreditLimit field if non-nil, zero value otherwise.

### GetCreditLimitOk

`func (o *AuthorizerCreditType) GetCreditLimitOk() (*CurrencyAmountType, bool)`

GetCreditLimitOk returns a tuple with the CreditLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreditLimit

`func (o *AuthorizerCreditType) SetCreditLimit(v CurrencyAmountType)`

SetCreditLimit sets CreditLimit field to given value.

### HasCreditLimit

`func (o *AuthorizerCreditType) HasCreditLimit() bool`

HasCreditLimit returns a boolean if a field has been set.

### GetActualAmount

`func (o *AuthorizerCreditType) GetActualAmount() CurrencyAmountType`

GetActualAmount returns the ActualAmount field if non-nil, zero value otherwise.

### GetActualAmountOk

`func (o *AuthorizerCreditType) GetActualAmountOk() (*CurrencyAmountType, bool)`

GetActualAmountOk returns a tuple with the ActualAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActualAmount

`func (o *AuthorizerCreditType) SetActualAmount(v CurrencyAmountType)`

SetActualAmount sets ActualAmount field to given value.

### HasActualAmount

`func (o *AuthorizerCreditType) HasActualAmount() bool`

HasActualAmount returns a boolean if a field has been set.

### GetAuthorizerCreditDetails

`func (o *AuthorizerCreditType) GetAuthorizerCreditDetails() []AuthorizerCreditDetailType`

GetAuthorizerCreditDetails returns the AuthorizerCreditDetails field if non-nil, zero value otherwise.

### GetAuthorizerCreditDetailsOk

`func (o *AuthorizerCreditType) GetAuthorizerCreditDetailsOk() (*[]AuthorizerCreditDetailType, bool)`

GetAuthorizerCreditDetailsOk returns a tuple with the AuthorizerCreditDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthorizerCreditDetails

`func (o *AuthorizerCreditType) SetAuthorizerCreditDetails(v []AuthorizerCreditDetailType)`

SetAuthorizerCreditDetails sets AuthorizerCreditDetails field to given value.

### HasAuthorizerCreditDetails

`func (o *AuthorizerCreditType) HasAuthorizerCreditDetails() bool`

HasAuthorizerCreditDetails returns a boolean if a field has been set.

### GetTransactionDate

`func (o *AuthorizerCreditType) GetTransactionDate() string`

GetTransactionDate returns the TransactionDate field if non-nil, zero value otherwise.

### GetTransactionDateOk

`func (o *AuthorizerCreditType) GetTransactionDateOk() (*string, bool)`

GetTransactionDateOk returns a tuple with the TransactionDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionDate

`func (o *AuthorizerCreditType) SetTransactionDate(v string)`

SetTransactionDate sets TransactionDate field to given value.

### HasTransactionDate

`func (o *AuthorizerCreditType) HasTransactionDate() bool`

HasTransactionDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


