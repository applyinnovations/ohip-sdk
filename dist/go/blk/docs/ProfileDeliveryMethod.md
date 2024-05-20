# ProfileDeliveryMethod

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DeliveryId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**DeliveryModule** | Pointer to [**ProfileDeliveryModuleType**](ProfileDeliveryModuleType.md) |  | [optional] 
**DeliveryType** | Pointer to **string** | Delivery type can have a value EMAIL, ELECTRONIC etc and it depends on the parameter set in OPERA Control. | [optional] 
**DeliveryValue** | Pointer to **string** | Delivery value holds the corresponding value of the delivery type.. | [optional] 
**HotelId** | Pointer to **string** | Property that has delivery methods configured. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 

## Methods

### NewProfileDeliveryMethod

`func NewProfileDeliveryMethod() *ProfileDeliveryMethod`

NewProfileDeliveryMethod instantiates a new ProfileDeliveryMethod object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProfileDeliveryMethodWithDefaults

`func NewProfileDeliveryMethodWithDefaults() *ProfileDeliveryMethod`

NewProfileDeliveryMethodWithDefaults instantiates a new ProfileDeliveryMethod object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDeliveryId

`func (o *ProfileDeliveryMethod) GetDeliveryId() UniqueIDType`

GetDeliveryId returns the DeliveryId field if non-nil, zero value otherwise.

### GetDeliveryIdOk

`func (o *ProfileDeliveryMethod) GetDeliveryIdOk() (*UniqueIDType, bool)`

GetDeliveryIdOk returns a tuple with the DeliveryId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryId

`func (o *ProfileDeliveryMethod) SetDeliveryId(v UniqueIDType)`

SetDeliveryId sets DeliveryId field to given value.

### HasDeliveryId

`func (o *ProfileDeliveryMethod) HasDeliveryId() bool`

HasDeliveryId returns a boolean if a field has been set.

### GetDeliveryModule

`func (o *ProfileDeliveryMethod) GetDeliveryModule() ProfileDeliveryModuleType`

GetDeliveryModule returns the DeliveryModule field if non-nil, zero value otherwise.

### GetDeliveryModuleOk

`func (o *ProfileDeliveryMethod) GetDeliveryModuleOk() (*ProfileDeliveryModuleType, bool)`

GetDeliveryModuleOk returns a tuple with the DeliveryModule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryModule

`func (o *ProfileDeliveryMethod) SetDeliveryModule(v ProfileDeliveryModuleType)`

SetDeliveryModule sets DeliveryModule field to given value.

### HasDeliveryModule

`func (o *ProfileDeliveryMethod) HasDeliveryModule() bool`

HasDeliveryModule returns a boolean if a field has been set.

### GetDeliveryType

`func (o *ProfileDeliveryMethod) GetDeliveryType() string`

GetDeliveryType returns the DeliveryType field if non-nil, zero value otherwise.

### GetDeliveryTypeOk

`func (o *ProfileDeliveryMethod) GetDeliveryTypeOk() (*string, bool)`

GetDeliveryTypeOk returns a tuple with the DeliveryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryType

`func (o *ProfileDeliveryMethod) SetDeliveryType(v string)`

SetDeliveryType sets DeliveryType field to given value.

### HasDeliveryType

`func (o *ProfileDeliveryMethod) HasDeliveryType() bool`

HasDeliveryType returns a boolean if a field has been set.

### GetDeliveryValue

`func (o *ProfileDeliveryMethod) GetDeliveryValue() string`

GetDeliveryValue returns the DeliveryValue field if non-nil, zero value otherwise.

### GetDeliveryValueOk

`func (o *ProfileDeliveryMethod) GetDeliveryValueOk() (*string, bool)`

GetDeliveryValueOk returns a tuple with the DeliveryValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeliveryValue

`func (o *ProfileDeliveryMethod) SetDeliveryValue(v string)`

SetDeliveryValue sets DeliveryValue field to given value.

### HasDeliveryValue

`func (o *ProfileDeliveryMethod) HasDeliveryValue() bool`

HasDeliveryValue returns a boolean if a field has been set.

### GetHotelId

`func (o *ProfileDeliveryMethod) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ProfileDeliveryMethod) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ProfileDeliveryMethod) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ProfileDeliveryMethod) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ProfileDeliveryMethod) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ProfileDeliveryMethod) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ProfileDeliveryMethod) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ProfileDeliveryMethod) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetPrimaryInd

`func (o *ProfileDeliveryMethod) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *ProfileDeliveryMethod) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *ProfileDeliveryMethod) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *ProfileDeliveryMethod) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


