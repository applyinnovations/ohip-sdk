# FixedChargeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Article** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ChargeAmount** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Percent** | Pointer to **float32** | Percentage of the rate amount. | [optional] 
**Quantity** | Pointer to **int32** | Quantity of the product. | [optional] 
**RoomNights** | Pointer to **int32** | Holds number of comp or cash room night to allocate. | [optional] 
**Supplement** | Pointer to **string** | Additional information regarding the fixed charge. | [optional] 
**Transaction** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 

## Methods

### NewFixedChargeDetailType

`func NewFixedChargeDetailType() *FixedChargeDetailType`

NewFixedChargeDetailType instantiates a new FixedChargeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFixedChargeDetailTypeWithDefaults

`func NewFixedChargeDetailTypeWithDefaults() *FixedChargeDetailType`

NewFixedChargeDetailTypeWithDefaults instantiates a new FixedChargeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArticle

`func (o *FixedChargeDetailType) GetArticle() CodeDescriptionType`

GetArticle returns the Article field if non-nil, zero value otherwise.

### GetArticleOk

`func (o *FixedChargeDetailType) GetArticleOk() (*CodeDescriptionType, bool)`

GetArticleOk returns a tuple with the Article field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArticle

`func (o *FixedChargeDetailType) SetArticle(v CodeDescriptionType)`

SetArticle sets Article field to given value.

### HasArticle

`func (o *FixedChargeDetailType) HasArticle() bool`

HasArticle returns a boolean if a field has been set.

### GetChargeAmount

`func (o *FixedChargeDetailType) GetChargeAmount() CurrencyAmountType`

GetChargeAmount returns the ChargeAmount field if non-nil, zero value otherwise.

### GetChargeAmountOk

`func (o *FixedChargeDetailType) GetChargeAmountOk() (*CurrencyAmountType, bool)`

GetChargeAmountOk returns a tuple with the ChargeAmount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeAmount

`func (o *FixedChargeDetailType) SetChargeAmount(v CurrencyAmountType)`

SetChargeAmount sets ChargeAmount field to given value.

### HasChargeAmount

`func (o *FixedChargeDetailType) HasChargeAmount() bool`

HasChargeAmount returns a boolean if a field has been set.

### GetPercent

`func (o *FixedChargeDetailType) GetPercent() float32`

GetPercent returns the Percent field if non-nil, zero value otherwise.

### GetPercentOk

`func (o *FixedChargeDetailType) GetPercentOk() (*float32, bool)`

GetPercentOk returns a tuple with the Percent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPercent

`func (o *FixedChargeDetailType) SetPercent(v float32)`

SetPercent sets Percent field to given value.

### HasPercent

`func (o *FixedChargeDetailType) HasPercent() bool`

HasPercent returns a boolean if a field has been set.

### GetQuantity

`func (o *FixedChargeDetailType) GetQuantity() int32`

GetQuantity returns the Quantity field if non-nil, zero value otherwise.

### GetQuantityOk

`func (o *FixedChargeDetailType) GetQuantityOk() (*int32, bool)`

GetQuantityOk returns a tuple with the Quantity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuantity

`func (o *FixedChargeDetailType) SetQuantity(v int32)`

SetQuantity sets Quantity field to given value.

### HasQuantity

`func (o *FixedChargeDetailType) HasQuantity() bool`

HasQuantity returns a boolean if a field has been set.

### GetRoomNights

`func (o *FixedChargeDetailType) GetRoomNights() int32`

GetRoomNights returns the RoomNights field if non-nil, zero value otherwise.

### GetRoomNightsOk

`func (o *FixedChargeDetailType) GetRoomNightsOk() (*int32, bool)`

GetRoomNightsOk returns a tuple with the RoomNights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomNights

`func (o *FixedChargeDetailType) SetRoomNights(v int32)`

SetRoomNights sets RoomNights field to given value.

### HasRoomNights

`func (o *FixedChargeDetailType) HasRoomNights() bool`

HasRoomNights returns a boolean if a field has been set.

### GetSupplement

`func (o *FixedChargeDetailType) GetSupplement() string`

GetSupplement returns the Supplement field if non-nil, zero value otherwise.

### GetSupplementOk

`func (o *FixedChargeDetailType) GetSupplementOk() (*string, bool)`

GetSupplementOk returns a tuple with the Supplement field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSupplement

`func (o *FixedChargeDetailType) SetSupplement(v string)`

SetSupplement sets Supplement field to given value.

### HasSupplement

`func (o *FixedChargeDetailType) HasSupplement() bool`

HasSupplement returns a boolean if a field has been set.

### GetTransaction

`func (o *FixedChargeDetailType) GetTransaction() CodeDescriptionType`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *FixedChargeDetailType) GetTransactionOk() (*CodeDescriptionType, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *FixedChargeDetailType) SetTransaction(v CodeDescriptionType)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *FixedChargeDetailType) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


