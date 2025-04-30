# TotalPricingElementType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code that associated with Transaction Code and Total Pricing Element | [optional] 
**Transaction** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ElementCode** | Pointer to [**CodeDescriptionType**](CodeDescriptionType.md) |  | [optional] 
**ChargeType** | Pointer to [**ChargeTypeType**](ChargeTypeType.md) |  | [optional] 
**EditPricingElementId** | Pointer to [**TotalPricingElementIDType**](TotalPricingElementIDType.md) |  | [optional] 

## Methods

### NewTotalPricingElementType

`func NewTotalPricingElementType() *TotalPricingElementType`

NewTotalPricingElementType instantiates a new TotalPricingElementType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTotalPricingElementTypeWithDefaults

`func NewTotalPricingElementTypeWithDefaults() *TotalPricingElementType`

NewTotalPricingElementTypeWithDefaults instantiates a new TotalPricingElementType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *TotalPricingElementType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *TotalPricingElementType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *TotalPricingElementType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *TotalPricingElementType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetTransaction

`func (o *TotalPricingElementType) GetTransaction() CodeDescriptionType`

GetTransaction returns the Transaction field if non-nil, zero value otherwise.

### GetTransactionOk

`func (o *TotalPricingElementType) GetTransactionOk() (*CodeDescriptionType, bool)`

GetTransactionOk returns a tuple with the Transaction field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransaction

`func (o *TotalPricingElementType) SetTransaction(v CodeDescriptionType)`

SetTransaction sets Transaction field to given value.

### HasTransaction

`func (o *TotalPricingElementType) HasTransaction() bool`

HasTransaction returns a boolean if a field has been set.

### GetElementCode

`func (o *TotalPricingElementType) GetElementCode() CodeDescriptionType`

GetElementCode returns the ElementCode field if non-nil, zero value otherwise.

### GetElementCodeOk

`func (o *TotalPricingElementType) GetElementCodeOk() (*CodeDescriptionType, bool)`

GetElementCodeOk returns a tuple with the ElementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetElementCode

`func (o *TotalPricingElementType) SetElementCode(v CodeDescriptionType)`

SetElementCode sets ElementCode field to given value.

### HasElementCode

`func (o *TotalPricingElementType) HasElementCode() bool`

HasElementCode returns a boolean if a field has been set.

### GetChargeType

`func (o *TotalPricingElementType) GetChargeType() ChargeTypeType`

GetChargeType returns the ChargeType field if non-nil, zero value otherwise.

### GetChargeTypeOk

`func (o *TotalPricingElementType) GetChargeTypeOk() (*ChargeTypeType, bool)`

GetChargeTypeOk returns a tuple with the ChargeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChargeType

`func (o *TotalPricingElementType) SetChargeType(v ChargeTypeType)`

SetChargeType sets ChargeType field to given value.

### HasChargeType

`func (o *TotalPricingElementType) HasChargeType() bool`

HasChargeType returns a boolean if a field has been set.

### GetEditPricingElementId

`func (o *TotalPricingElementType) GetEditPricingElementId() TotalPricingElementIDType`

GetEditPricingElementId returns the EditPricingElementId field if non-nil, zero value otherwise.

### GetEditPricingElementIdOk

`func (o *TotalPricingElementType) GetEditPricingElementIdOk() (*TotalPricingElementIDType, bool)`

GetEditPricingElementIdOk returns a tuple with the EditPricingElementId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEditPricingElementId

`func (o *TotalPricingElementType) SetEditPricingElementId(v TotalPricingElementIDType)`

SetEditPricingElementId sets EditPricingElementId field to given value.

### HasEditPricingElementId

`func (o *TotalPricingElementType) HasEditPricingElementId() bool`

HasEditPricingElementId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


