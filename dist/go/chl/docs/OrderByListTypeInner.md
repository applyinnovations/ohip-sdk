# OrderByListTypeInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | Pointer to **string** |  | [optional] 
**OrderType** | Pointer to [**OrderByAscDescType**](OrderByAscDescType.md) |  | [optional] 

## Methods

### NewOrderByListTypeInner

`func NewOrderByListTypeInner() *OrderByListTypeInner`

NewOrderByListTypeInner instantiates a new OrderByListTypeInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewOrderByListTypeInnerWithDefaults

`func NewOrderByListTypeInnerWithDefaults() *OrderByListTypeInner`

NewOrderByListTypeInnerWithDefaults instantiates a new OrderByListTypeInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *OrderByListTypeInner) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *OrderByListTypeInner) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *OrderByListTypeInner) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *OrderByListTypeInner) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetOrderType

`func (o *OrderByListTypeInner) GetOrderType() OrderByAscDescType`

GetOrderType returns the OrderType field if non-nil, zero value otherwise.

### GetOrderTypeOk

`func (o *OrderByListTypeInner) GetOrderTypeOk() (*OrderByAscDescType, bool)`

GetOrderTypeOk returns a tuple with the OrderType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderType

`func (o *OrderByListTypeInner) SetOrderType(v OrderByAscDescType)`

SetOrderType sets OrderType field to given value.

### HasOrderType

`func (o *OrderByListTypeInner) HasOrderType() bool`

HasOrderType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


