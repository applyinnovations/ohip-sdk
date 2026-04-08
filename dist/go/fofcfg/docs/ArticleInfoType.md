# ArticleInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the article. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction code to which the article belongs. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostIt** | Pointer to [**ArticlePostItType**](ArticlePostItType.md) |  | [optional] 
**UniversalProductCode** | Pointer to **string** | Unique Universal product code of the article. | [optional] 
**HotelId** | Pointer to **string** | Hotel code to which the article belongs. | [optional] 
**ArticleCode** | Pointer to **string** | Unique code of the article. | [optional] 
**Inactive** | Pointer to **bool** | Indicates whether the article is inactive or not. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 

## Methods

### NewArticleInfoType

`func NewArticleInfoType() *ArticleInfoType`

NewArticleInfoType instantiates a new ArticleInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewArticleInfoTypeWithDefaults

`func NewArticleInfoTypeWithDefaults() *ArticleInfoType`

NewArticleInfoTypeWithDefaults instantiates a new ArticleInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ArticleInfoType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ArticleInfoType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ArticleInfoType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ArticleInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetTransactionCode

`func (o *ArticleInfoType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *ArticleInfoType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *ArticleInfoType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *ArticleInfoType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetPrice

`func (o *ArticleInfoType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ArticleInfoType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ArticleInfoType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ArticleInfoType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetPostIt

`func (o *ArticleInfoType) GetPostIt() ArticlePostItType`

GetPostIt returns the PostIt field if non-nil, zero value otherwise.

### GetPostItOk

`func (o *ArticleInfoType) GetPostItOk() (*ArticlePostItType, bool)`

GetPostItOk returns a tuple with the PostIt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostIt

`func (o *ArticleInfoType) SetPostIt(v ArticlePostItType)`

SetPostIt sets PostIt field to given value.

### HasPostIt

`func (o *ArticleInfoType) HasPostIt() bool`

HasPostIt returns a boolean if a field has been set.

### GetUniversalProductCode

`func (o *ArticleInfoType) GetUniversalProductCode() string`

GetUniversalProductCode returns the UniversalProductCode field if non-nil, zero value otherwise.

### GetUniversalProductCodeOk

`func (o *ArticleInfoType) GetUniversalProductCodeOk() (*string, bool)`

GetUniversalProductCodeOk returns a tuple with the UniversalProductCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUniversalProductCode

`func (o *ArticleInfoType) SetUniversalProductCode(v string)`

SetUniversalProductCode sets UniversalProductCode field to given value.

### HasUniversalProductCode

`func (o *ArticleInfoType) HasUniversalProductCode() bool`

HasUniversalProductCode returns a boolean if a field has been set.

### GetHotelId

`func (o *ArticleInfoType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ArticleInfoType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ArticleInfoType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ArticleInfoType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetArticleCode

`func (o *ArticleInfoType) GetArticleCode() string`

GetArticleCode returns the ArticleCode field if non-nil, zero value otherwise.

### GetArticleCodeOk

`func (o *ArticleInfoType) GetArticleCodeOk() (*string, bool)`

GetArticleCodeOk returns a tuple with the ArticleCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticleCode

`func (o *ArticleInfoType) SetArticleCode(v string)`

SetArticleCode sets ArticleCode field to given value.

### HasArticleCode

`func (o *ArticleInfoType) HasArticleCode() bool`

HasArticleCode returns a boolean if a field has been set.

### GetInactive

`func (o *ArticleInfoType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ArticleInfoType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ArticleInfoType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ArticleInfoType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ArticleInfoType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ArticleInfoType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ArticleInfoType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ArticleInfoType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


