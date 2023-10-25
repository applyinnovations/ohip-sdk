# InterfaceRightType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | User defined code for an Interface Right. | [optional] 
**Description** | Pointer to **string** | User defined description for an Interface Right. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code to which the Interface Right belongs to. | [optional] 
**InterfaceId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**InterfaceRightDescription** | Pointer to **string** | System Description of an allowed Interface Right. | [optional] 
**Right** | Pointer to **int32** | Internal code for each allowed right of a Hotel Interface record. | [optional] 

## Methods

### NewInterfaceRightType

`func NewInterfaceRightType() *InterfaceRightType`

NewInterfaceRightType instantiates a new InterfaceRightType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceRightTypeWithDefaults

`func NewInterfaceRightTypeWithDefaults() *InterfaceRightType`

NewInterfaceRightTypeWithDefaults instantiates a new InterfaceRightType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *InterfaceRightType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *InterfaceRightType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *InterfaceRightType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *InterfaceRightType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *InterfaceRightType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *InterfaceRightType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *InterfaceRightType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *InterfaceRightType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *InterfaceRightType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceRightType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceRightType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceRightType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInterfaceId

`func (o *InterfaceRightType) GetInterfaceId() UniqueIDType`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *InterfaceRightType) GetInterfaceIdOk() (*UniqueIDType, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *InterfaceRightType) SetInterfaceId(v UniqueIDType)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *InterfaceRightType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetInterfaceRightDescription

`func (o *InterfaceRightType) GetInterfaceRightDescription() string`

GetInterfaceRightDescription returns the InterfaceRightDescription field if non-nil, zero value otherwise.

### GetInterfaceRightDescriptionOk

`func (o *InterfaceRightType) GetInterfaceRightDescriptionOk() (*string, bool)`

GetInterfaceRightDescriptionOk returns a tuple with the InterfaceRightDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceRightDescription

`func (o *InterfaceRightType) SetInterfaceRightDescription(v string)`

SetInterfaceRightDescription sets InterfaceRightDescription field to given value.

### HasInterfaceRightDescription

`func (o *InterfaceRightType) HasInterfaceRightDescription() bool`

HasInterfaceRightDescription returns a boolean if a field has been set.

### GetRight

`func (o *InterfaceRightType) GetRight() int32`

GetRight returns the Right field if non-nil, zero value otherwise.

### GetRightOk

`func (o *InterfaceRightType) GetRightOk() (*int32, bool)`

GetRightOk returns a tuple with the Right field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRight

`func (o *InterfaceRightType) SetRight(v int32)`

SetRight sets Right field to given value.

### HasRight

`func (o *InterfaceRightType) HasRight() bool`

HasRight returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


