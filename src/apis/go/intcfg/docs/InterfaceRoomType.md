# InterfaceRoomType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code of the Interface Room. | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**RoomType** | Pointer to **string** | Front Office Room Type. | [optional] 
**RoomId** | Pointer to **string** | Front Office Room Number. | [optional] 
**LineNumber** | Pointer to **string** | External System&#39;s extension number. | [optional] 
**OldLineNumber** | Pointer to **string** | External System&#39;s extension number. It is used for editing a record. It is logically part of the record ID, and can actually be updated. | [optional] 
**Type** | Pointer to **string** | Line Type of an Interface Room. | [optional] 
**DataLine** | Pointer to [**DataLineType**](DataLineType.md) |  | [optional] 
**DataLineId** | Pointer to **string** | Translation Table Id as defined in the IFC_CTRL table. It is also referred as Xlat Id. | [optional] 
**WakeUpCall** | Pointer to **bool** | Value to set/check if the wake up call funtionality is enabled/disabled for the particular line number. | [optional] 
**DoNotDisturb** | Pointer to [**DoNotDisturbType**](DoNotDisturbType.md) |  | [optional] 
**ClassOfService** | Pointer to [**ClassOfServiceConfigType**](ClassOfServiceConfigType.md) |  | [optional] 
**DirectInwardDial** | Pointer to [**DirectInwardDialType**](DirectInwardDialType.md) |  | [optional] 
**MessageWaiting** | Pointer to [**MessageWaitingType**](MessageWaitingType.md) |  | [optional] 
**MaskDialNumber** | Pointer to [**MaskDialNumberType**](MaskDialNumberType.md) |  | [optional] 

## Methods

### NewInterfaceRoomType

`func NewInterfaceRoomType() *InterfaceRoomType`

NewInterfaceRoomType instantiates a new InterfaceRoomType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceRoomTypeWithDefaults

`func NewInterfaceRoomTypeWithDefaults() *InterfaceRoomType`

NewInterfaceRoomTypeWithDefaults instantiates a new InterfaceRoomType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *InterfaceRoomType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceRoomType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceRoomType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceRoomType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLogo

`func (o *InterfaceRoomType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *InterfaceRoomType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *InterfaceRoomType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *InterfaceRoomType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetRoomType

`func (o *InterfaceRoomType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *InterfaceRoomType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *InterfaceRoomType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *InterfaceRoomType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetRoomId

`func (o *InterfaceRoomType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *InterfaceRoomType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *InterfaceRoomType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *InterfaceRoomType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetLineNumber

`func (o *InterfaceRoomType) GetLineNumber() string`

GetLineNumber returns the LineNumber field if non-nil, zero value otherwise.

### GetLineNumberOk

`func (o *InterfaceRoomType) GetLineNumberOk() (*string, bool)`

GetLineNumberOk returns a tuple with the LineNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLineNumber

`func (o *InterfaceRoomType) SetLineNumber(v string)`

SetLineNumber sets LineNumber field to given value.

### HasLineNumber

`func (o *InterfaceRoomType) HasLineNumber() bool`

HasLineNumber returns a boolean if a field has been set.

### GetOldLineNumber

`func (o *InterfaceRoomType) GetOldLineNumber() string`

GetOldLineNumber returns the OldLineNumber field if non-nil, zero value otherwise.

### GetOldLineNumberOk

`func (o *InterfaceRoomType) GetOldLineNumberOk() (*string, bool)`

GetOldLineNumberOk returns a tuple with the OldLineNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldLineNumber

`func (o *InterfaceRoomType) SetOldLineNumber(v string)`

SetOldLineNumber sets OldLineNumber field to given value.

### HasOldLineNumber

`func (o *InterfaceRoomType) HasOldLineNumber() bool`

HasOldLineNumber returns a boolean if a field has been set.

### GetType

`func (o *InterfaceRoomType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *InterfaceRoomType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *InterfaceRoomType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *InterfaceRoomType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetDataLine

`func (o *InterfaceRoomType) GetDataLine() DataLineType`

GetDataLine returns the DataLine field if non-nil, zero value otherwise.

### GetDataLineOk

`func (o *InterfaceRoomType) GetDataLineOk() (*DataLineType, bool)`

GetDataLineOk returns a tuple with the DataLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataLine

`func (o *InterfaceRoomType) SetDataLine(v DataLineType)`

SetDataLine sets DataLine field to given value.

### HasDataLine

`func (o *InterfaceRoomType) HasDataLine() bool`

HasDataLine returns a boolean if a field has been set.

### GetDataLineId

`func (o *InterfaceRoomType) GetDataLineId() string`

GetDataLineId returns the DataLineId field if non-nil, zero value otherwise.

### GetDataLineIdOk

`func (o *InterfaceRoomType) GetDataLineIdOk() (*string, bool)`

GetDataLineIdOk returns a tuple with the DataLineId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataLineId

`func (o *InterfaceRoomType) SetDataLineId(v string)`

SetDataLineId sets DataLineId field to given value.

### HasDataLineId

`func (o *InterfaceRoomType) HasDataLineId() bool`

HasDataLineId returns a boolean if a field has been set.

### GetWakeUpCall

`func (o *InterfaceRoomType) GetWakeUpCall() bool`

GetWakeUpCall returns the WakeUpCall field if non-nil, zero value otherwise.

### GetWakeUpCallOk

`func (o *InterfaceRoomType) GetWakeUpCallOk() (*bool, bool)`

GetWakeUpCallOk returns a tuple with the WakeUpCall field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWakeUpCall

`func (o *InterfaceRoomType) SetWakeUpCall(v bool)`

SetWakeUpCall sets WakeUpCall field to given value.

### HasWakeUpCall

`func (o *InterfaceRoomType) HasWakeUpCall() bool`

HasWakeUpCall returns a boolean if a field has been set.

### GetDoNotDisturb

`func (o *InterfaceRoomType) GetDoNotDisturb() DoNotDisturbType`

GetDoNotDisturb returns the DoNotDisturb field if non-nil, zero value otherwise.

### GetDoNotDisturbOk

`func (o *InterfaceRoomType) GetDoNotDisturbOk() (*DoNotDisturbType, bool)`

GetDoNotDisturbOk returns a tuple with the DoNotDisturb field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDoNotDisturb

`func (o *InterfaceRoomType) SetDoNotDisturb(v DoNotDisturbType)`

SetDoNotDisturb sets DoNotDisturb field to given value.

### HasDoNotDisturb

`func (o *InterfaceRoomType) HasDoNotDisturb() bool`

HasDoNotDisturb returns a boolean if a field has been set.

### GetClassOfService

`func (o *InterfaceRoomType) GetClassOfService() ClassOfServiceConfigType`

GetClassOfService returns the ClassOfService field if non-nil, zero value otherwise.

### GetClassOfServiceOk

`func (o *InterfaceRoomType) GetClassOfServiceOk() (*ClassOfServiceConfigType, bool)`

GetClassOfServiceOk returns a tuple with the ClassOfService field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassOfService

`func (o *InterfaceRoomType) SetClassOfService(v ClassOfServiceConfigType)`

SetClassOfService sets ClassOfService field to given value.

### HasClassOfService

`func (o *InterfaceRoomType) HasClassOfService() bool`

HasClassOfService returns a boolean if a field has been set.

### GetDirectInwardDial

`func (o *InterfaceRoomType) GetDirectInwardDial() DirectInwardDialType`

GetDirectInwardDial returns the DirectInwardDial field if non-nil, zero value otherwise.

### GetDirectInwardDialOk

`func (o *InterfaceRoomType) GetDirectInwardDialOk() (*DirectInwardDialType, bool)`

GetDirectInwardDialOk returns a tuple with the DirectInwardDial field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirectInwardDial

`func (o *InterfaceRoomType) SetDirectInwardDial(v DirectInwardDialType)`

SetDirectInwardDial sets DirectInwardDial field to given value.

### HasDirectInwardDial

`func (o *InterfaceRoomType) HasDirectInwardDial() bool`

HasDirectInwardDial returns a boolean if a field has been set.

### GetMessageWaiting

`func (o *InterfaceRoomType) GetMessageWaiting() MessageWaitingType`

GetMessageWaiting returns the MessageWaiting field if non-nil, zero value otherwise.

### GetMessageWaitingOk

`func (o *InterfaceRoomType) GetMessageWaitingOk() (*MessageWaitingType, bool)`

GetMessageWaitingOk returns a tuple with the MessageWaiting field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageWaiting

`func (o *InterfaceRoomType) SetMessageWaiting(v MessageWaitingType)`

SetMessageWaiting sets MessageWaiting field to given value.

### HasMessageWaiting

`func (o *InterfaceRoomType) HasMessageWaiting() bool`

HasMessageWaiting returns a boolean if a field has been set.

### GetMaskDialNumber

`func (o *InterfaceRoomType) GetMaskDialNumber() MaskDialNumberType`

GetMaskDialNumber returns the MaskDialNumber field if non-nil, zero value otherwise.

### GetMaskDialNumberOk

`func (o *InterfaceRoomType) GetMaskDialNumberOk() (*MaskDialNumberType, bool)`

GetMaskDialNumberOk returns a tuple with the MaskDialNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaskDialNumber

`func (o *InterfaceRoomType) SetMaskDialNumber(v MaskDialNumberType)`

SetMaskDialNumber sets MaskDialNumber field to given value.

### HasMaskDialNumber

`func (o *InterfaceRoomType) HasMaskDialNumber() bool`

HasMaskDialNumber returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


