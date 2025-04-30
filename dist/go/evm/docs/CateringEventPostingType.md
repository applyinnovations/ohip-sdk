# CateringEventPostingType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**Posted** | Pointer to **bool** | Flag to determine if the revenue has been posted. | [optional] 
**RevenueType** | Pointer to **string** | The revenue type associated with the resource. | [optional] 
**IncludedRevenue** | Pointer to **bool** | Flag to determine if the posted revenue is Included. If not Included it is considered as Extra posted revenue. | [optional] 
**Revenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**PostedRevenue** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**ChequeNumber** | Pointer to **string** | An additional identifier for this resource on the folio. | [optional] 
**TransactionCode** | Pointer to **string** | Transaction Code used for posting revenue. | [optional] 
**ResourceName** | Pointer to **string** | Resource description for this posting. | [optional] 

## Methods

### NewCateringEventPostingType

`func NewCateringEventPostingType() *CateringEventPostingType`

NewCateringEventPostingType instantiates a new CateringEventPostingType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringEventPostingTypeWithDefaults

`func NewCateringEventPostingTypeWithDefaults() *CateringEventPostingType`

NewCateringEventPostingTypeWithDefaults instantiates a new CateringEventPostingType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPostId

`func (o *CateringEventPostingType) GetPostId() UniqueIDType`

GetPostId returns the PostId field if non-nil, zero value otherwise.

### GetPostIdOk

`func (o *CateringEventPostingType) GetPostIdOk() (*UniqueIDType, bool)`

GetPostIdOk returns a tuple with the PostId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostId

`func (o *CateringEventPostingType) SetPostId(v UniqueIDType)`

SetPostId sets PostId field to given value.

### HasPostId

`func (o *CateringEventPostingType) HasPostId() bool`

HasPostId returns a boolean if a field has been set.

### GetPosted

`func (o *CateringEventPostingType) GetPosted() bool`

GetPosted returns the Posted field if non-nil, zero value otherwise.

### GetPostedOk

`func (o *CateringEventPostingType) GetPostedOk() (*bool, bool)`

GetPostedOk returns a tuple with the Posted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPosted

`func (o *CateringEventPostingType) SetPosted(v bool)`

SetPosted sets Posted field to given value.

### HasPosted

`func (o *CateringEventPostingType) HasPosted() bool`

HasPosted returns a boolean if a field has been set.

### GetRevenueType

`func (o *CateringEventPostingType) GetRevenueType() string`

GetRevenueType returns the RevenueType field if non-nil, zero value otherwise.

### GetRevenueTypeOk

`func (o *CateringEventPostingType) GetRevenueTypeOk() (*string, bool)`

GetRevenueTypeOk returns a tuple with the RevenueType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenueType

`func (o *CateringEventPostingType) SetRevenueType(v string)`

SetRevenueType sets RevenueType field to given value.

### HasRevenueType

`func (o *CateringEventPostingType) HasRevenueType() bool`

HasRevenueType returns a boolean if a field has been set.

### GetIncludedRevenue

`func (o *CateringEventPostingType) GetIncludedRevenue() bool`

GetIncludedRevenue returns the IncludedRevenue field if non-nil, zero value otherwise.

### GetIncludedRevenueOk

`func (o *CateringEventPostingType) GetIncludedRevenueOk() (*bool, bool)`

GetIncludedRevenueOk returns a tuple with the IncludedRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludedRevenue

`func (o *CateringEventPostingType) SetIncludedRevenue(v bool)`

SetIncludedRevenue sets IncludedRevenue field to given value.

### HasIncludedRevenue

`func (o *CateringEventPostingType) HasIncludedRevenue() bool`

HasIncludedRevenue returns a boolean if a field has been set.

### GetRevenue

`func (o *CateringEventPostingType) GetRevenue() CurrencyAmountType`

GetRevenue returns the Revenue field if non-nil, zero value otherwise.

### GetRevenueOk

`func (o *CateringEventPostingType) GetRevenueOk() (*CurrencyAmountType, bool)`

GetRevenueOk returns a tuple with the Revenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevenue

`func (o *CateringEventPostingType) SetRevenue(v CurrencyAmountType)`

SetRevenue sets Revenue field to given value.

### HasRevenue

`func (o *CateringEventPostingType) HasRevenue() bool`

HasRevenue returns a boolean if a field has been set.

### GetPostedRevenue

`func (o *CateringEventPostingType) GetPostedRevenue() CurrencyAmountType`

GetPostedRevenue returns the PostedRevenue field if non-nil, zero value otherwise.

### GetPostedRevenueOk

`func (o *CateringEventPostingType) GetPostedRevenueOk() (*CurrencyAmountType, bool)`

GetPostedRevenueOk returns a tuple with the PostedRevenue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPostedRevenue

`func (o *CateringEventPostingType) SetPostedRevenue(v CurrencyAmountType)`

SetPostedRevenue sets PostedRevenue field to given value.

### HasPostedRevenue

`func (o *CateringEventPostingType) HasPostedRevenue() bool`

HasPostedRevenue returns a boolean if a field has been set.

### GetChequeNumber

`func (o *CateringEventPostingType) GetChequeNumber() string`

GetChequeNumber returns the ChequeNumber field if non-nil, zero value otherwise.

### GetChequeNumberOk

`func (o *CateringEventPostingType) GetChequeNumberOk() (*string, bool)`

GetChequeNumberOk returns a tuple with the ChequeNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChequeNumber

`func (o *CateringEventPostingType) SetChequeNumber(v string)`

SetChequeNumber sets ChequeNumber field to given value.

### HasChequeNumber

`func (o *CateringEventPostingType) HasChequeNumber() bool`

HasChequeNumber returns a boolean if a field has been set.

### GetTransactionCode

`func (o *CateringEventPostingType) GetTransactionCode() string`

GetTransactionCode returns the TransactionCode field if non-nil, zero value otherwise.

### GetTransactionCodeOk

`func (o *CateringEventPostingType) GetTransactionCodeOk() (*string, bool)`

GetTransactionCodeOk returns a tuple with the TransactionCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransactionCode

`func (o *CateringEventPostingType) SetTransactionCode(v string)`

SetTransactionCode sets TransactionCode field to given value.

### HasTransactionCode

`func (o *CateringEventPostingType) HasTransactionCode() bool`

HasTransactionCode returns a boolean if a field has been set.

### GetResourceName

`func (o *CateringEventPostingType) GetResourceName() string`

GetResourceName returns the ResourceName field if non-nil, zero value otherwise.

### GetResourceNameOk

`func (o *CateringEventPostingType) GetResourceNameOk() (*string, bool)`

GetResourceNameOk returns a tuple with the ResourceName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResourceName

`func (o *CateringEventPostingType) SetResourceName(v string)`

SetResourceName sets ResourceName field to given value.

### HasResourceName

`func (o *CateringEventPostingType) HasResourceName() bool`

HasResourceName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


