# ItemRateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ItemRateId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**ItemRateCode** | Pointer to **string** | The Rate Code of the Item Rate. | [optional] 
**Name** | Pointer to **string** | The Name of the Item Rate. | [optional] 
**Price** | Pointer to [**CurrencyAmountType**](CurrencyAmountType.md) |  | [optional] 
**Hourly** | Pointer to **bool** | If true, it&#39;s hourly rate. | [optional] 
**Default** | Pointer to **bool** | If true, it&#39;s the default Rate for the Item. | [optional] 

## Methods

### NewItemRateType

`func NewItemRateType() *ItemRateType`

NewItemRateType instantiates a new ItemRateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewItemRateTypeWithDefaults

`func NewItemRateTypeWithDefaults() *ItemRateType`

NewItemRateTypeWithDefaults instantiates a new ItemRateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItemRateId

`func (o *ItemRateType) GetItemRateId() UniqueIDType`

GetItemRateId returns the ItemRateId field if non-nil, zero value otherwise.

### GetItemRateIdOk

`func (o *ItemRateType) GetItemRateIdOk() (*UniqueIDType, bool)`

GetItemRateIdOk returns a tuple with the ItemRateId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemRateId

`func (o *ItemRateType) SetItemRateId(v UniqueIDType)`

SetItemRateId sets ItemRateId field to given value.

### HasItemRateId

`func (o *ItemRateType) HasItemRateId() bool`

HasItemRateId returns a boolean if a field has been set.

### GetItemRateCode

`func (o *ItemRateType) GetItemRateCode() string`

GetItemRateCode returns the ItemRateCode field if non-nil, zero value otherwise.

### GetItemRateCodeOk

`func (o *ItemRateType) GetItemRateCodeOk() (*string, bool)`

GetItemRateCodeOk returns a tuple with the ItemRateCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItemRateCode

`func (o *ItemRateType) SetItemRateCode(v string)`

SetItemRateCode sets ItemRateCode field to given value.

### HasItemRateCode

`func (o *ItemRateType) HasItemRateCode() bool`

HasItemRateCode returns a boolean if a field has been set.

### GetName

`func (o *ItemRateType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ItemRateType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ItemRateType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ItemRateType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetPrice

`func (o *ItemRateType) GetPrice() CurrencyAmountType`

GetPrice returns the Price field if non-nil, zero value otherwise.

### GetPriceOk

`func (o *ItemRateType) GetPriceOk() (*CurrencyAmountType, bool)`

GetPriceOk returns a tuple with the Price field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrice

`func (o *ItemRateType) SetPrice(v CurrencyAmountType)`

SetPrice sets Price field to given value.

### HasPrice

`func (o *ItemRateType) HasPrice() bool`

HasPrice returns a boolean if a field has been set.

### GetHourly

`func (o *ItemRateType) GetHourly() bool`

GetHourly returns the Hourly field if non-nil, zero value otherwise.

### GetHourlyOk

`func (o *ItemRateType) GetHourlyOk() (*bool, bool)`

GetHourlyOk returns a tuple with the Hourly field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHourly

`func (o *ItemRateType) SetHourly(v bool)`

SetHourly sets Hourly field to given value.

### HasHourly

`func (o *ItemRateType) HasHourly() bool`

HasHourly returns a boolean if a field has been set.

### GetDefault

`func (o *ItemRateType) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *ItemRateType) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *ItemRateType) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *ItemRateType) HasDefault() bool`

HasDefault returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


