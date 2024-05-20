# ImportInterfaceRoomsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel Code to which the Interface Room belongs to. | [optional] 
**Logo** | Pointer to **string** | Hotel Interface Logo. On the database, this is also referred as DBF Logo. This is a three letter code followed by an underscore(_). This tells us which DBF files and log files with the prefix that IFC7 is going to create. | [optional] 
**DataLine** | Pointer to [**DataLineType**](DataLineType.md) |  | [optional] 
**NumberOfLines** | Pointer to **int32** | Number of lines to use for the import of a Hotel Interface Room. | [optional] 
**RemoveLeadingZeros** | Pointer to **bool** | Number of lines to use for the import of a Hotel Interface Room. | [optional] 
**Line1Prefix** | Pointer to **int32** | Prefix for the Hotel Interface Room number for Line 1. | [optional] 
**Line1AddTo** | Pointer to **int32** | Numeric value to be summed with the Hotel Interface Room number for Line 1. | [optional] 
**Line2Prefix** | Pointer to **int32** | Prefix for the Hotel Interface Room number for Line 2. | [optional] 
**Line2AddTo** | Pointer to **int32** | Numeric value to be summed with the Hotel Interface Room number for Line 2. | [optional] 
**Line3Prefix** | Pointer to **int32** | Prefix for the Hotel Interface Room number for Line 3. | [optional] 
**Line3AddTo** | Pointer to **int32** | Numeric value to be summed with the Hotel Interface Room number for Line 3. | [optional] 
**Line4Prefix** | Pointer to **int32** | Prefix for the Hotel Interface Room number for Line 4. | [optional] 
**Line4AddTo** | Pointer to **int32** | Numeric value to be summed with the Hotel Interface Room number for Line 4. | [optional] 
**SelectedRoomTypes** | Pointer to **string** | Concatenated label of Hotel Room Categories, which will be imported to the Hotel Interface. | [optional] 
**MaskLines** | Pointer to [**[]RoomMaskSetupType**](RoomMaskSetupType.md) | Mask configurations for different line types. | [optional] 

## Methods

### NewImportInterfaceRoomsType

`func NewImportInterfaceRoomsType() *ImportInterfaceRoomsType`

NewImportInterfaceRoomsType instantiates a new ImportInterfaceRoomsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportInterfaceRoomsTypeWithDefaults

`func NewImportInterfaceRoomsTypeWithDefaults() *ImportInterfaceRoomsType`

NewImportInterfaceRoomsTypeWithDefaults instantiates a new ImportInterfaceRoomsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ImportInterfaceRoomsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ImportInterfaceRoomsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ImportInterfaceRoomsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ImportInterfaceRoomsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLogo

`func (o *ImportInterfaceRoomsType) GetLogo() string`

GetLogo returns the Logo field if non-nil, zero value otherwise.

### GetLogoOk

`func (o *ImportInterfaceRoomsType) GetLogoOk() (*string, bool)`

GetLogoOk returns a tuple with the Logo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogo

`func (o *ImportInterfaceRoomsType) SetLogo(v string)`

SetLogo sets Logo field to given value.

### HasLogo

`func (o *ImportInterfaceRoomsType) HasLogo() bool`

HasLogo returns a boolean if a field has been set.

### GetDataLine

`func (o *ImportInterfaceRoomsType) GetDataLine() DataLineType`

GetDataLine returns the DataLine field if non-nil, zero value otherwise.

### GetDataLineOk

`func (o *ImportInterfaceRoomsType) GetDataLineOk() (*DataLineType, bool)`

GetDataLineOk returns a tuple with the DataLine field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataLine

`func (o *ImportInterfaceRoomsType) SetDataLine(v DataLineType)`

SetDataLine sets DataLine field to given value.

### HasDataLine

`func (o *ImportInterfaceRoomsType) HasDataLine() bool`

HasDataLine returns a boolean if a field has been set.

### GetNumberOfLines

`func (o *ImportInterfaceRoomsType) GetNumberOfLines() int32`

GetNumberOfLines returns the NumberOfLines field if non-nil, zero value otherwise.

### GetNumberOfLinesOk

`func (o *ImportInterfaceRoomsType) GetNumberOfLinesOk() (*int32, bool)`

GetNumberOfLinesOk returns a tuple with the NumberOfLines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfLines

`func (o *ImportInterfaceRoomsType) SetNumberOfLines(v int32)`

SetNumberOfLines sets NumberOfLines field to given value.

### HasNumberOfLines

`func (o *ImportInterfaceRoomsType) HasNumberOfLines() bool`

HasNumberOfLines returns a boolean if a field has been set.

### GetRemoveLeadingZeros

`func (o *ImportInterfaceRoomsType) GetRemoveLeadingZeros() bool`

GetRemoveLeadingZeros returns the RemoveLeadingZeros field if non-nil, zero value otherwise.

### GetRemoveLeadingZerosOk

`func (o *ImportInterfaceRoomsType) GetRemoveLeadingZerosOk() (*bool, bool)`

GetRemoveLeadingZerosOk returns a tuple with the RemoveLeadingZeros field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveLeadingZeros

`func (o *ImportInterfaceRoomsType) SetRemoveLeadingZeros(v bool)`

SetRemoveLeadingZeros sets RemoveLeadingZeros field to given value.

### HasRemoveLeadingZeros

`func (o *ImportInterfaceRoomsType) HasRemoveLeadingZeros() bool`

HasRemoveLeadingZeros returns a boolean if a field has been set.

### GetLine1Prefix

`func (o *ImportInterfaceRoomsType) GetLine1Prefix() int32`

GetLine1Prefix returns the Line1Prefix field if non-nil, zero value otherwise.

### GetLine1PrefixOk

`func (o *ImportInterfaceRoomsType) GetLine1PrefixOk() (*int32, bool)`

GetLine1PrefixOk returns a tuple with the Line1Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine1Prefix

`func (o *ImportInterfaceRoomsType) SetLine1Prefix(v int32)`

SetLine1Prefix sets Line1Prefix field to given value.

### HasLine1Prefix

`func (o *ImportInterfaceRoomsType) HasLine1Prefix() bool`

HasLine1Prefix returns a boolean if a field has been set.

### GetLine1AddTo

`func (o *ImportInterfaceRoomsType) GetLine1AddTo() int32`

GetLine1AddTo returns the Line1AddTo field if non-nil, zero value otherwise.

### GetLine1AddToOk

`func (o *ImportInterfaceRoomsType) GetLine1AddToOk() (*int32, bool)`

GetLine1AddToOk returns a tuple with the Line1AddTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine1AddTo

`func (o *ImportInterfaceRoomsType) SetLine1AddTo(v int32)`

SetLine1AddTo sets Line1AddTo field to given value.

### HasLine1AddTo

`func (o *ImportInterfaceRoomsType) HasLine1AddTo() bool`

HasLine1AddTo returns a boolean if a field has been set.

### GetLine2Prefix

`func (o *ImportInterfaceRoomsType) GetLine2Prefix() int32`

GetLine2Prefix returns the Line2Prefix field if non-nil, zero value otherwise.

### GetLine2PrefixOk

`func (o *ImportInterfaceRoomsType) GetLine2PrefixOk() (*int32, bool)`

GetLine2PrefixOk returns a tuple with the Line2Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine2Prefix

`func (o *ImportInterfaceRoomsType) SetLine2Prefix(v int32)`

SetLine2Prefix sets Line2Prefix field to given value.

### HasLine2Prefix

`func (o *ImportInterfaceRoomsType) HasLine2Prefix() bool`

HasLine2Prefix returns a boolean if a field has been set.

### GetLine2AddTo

`func (o *ImportInterfaceRoomsType) GetLine2AddTo() int32`

GetLine2AddTo returns the Line2AddTo field if non-nil, zero value otherwise.

### GetLine2AddToOk

`func (o *ImportInterfaceRoomsType) GetLine2AddToOk() (*int32, bool)`

GetLine2AddToOk returns a tuple with the Line2AddTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine2AddTo

`func (o *ImportInterfaceRoomsType) SetLine2AddTo(v int32)`

SetLine2AddTo sets Line2AddTo field to given value.

### HasLine2AddTo

`func (o *ImportInterfaceRoomsType) HasLine2AddTo() bool`

HasLine2AddTo returns a boolean if a field has been set.

### GetLine3Prefix

`func (o *ImportInterfaceRoomsType) GetLine3Prefix() int32`

GetLine3Prefix returns the Line3Prefix field if non-nil, zero value otherwise.

### GetLine3PrefixOk

`func (o *ImportInterfaceRoomsType) GetLine3PrefixOk() (*int32, bool)`

GetLine3PrefixOk returns a tuple with the Line3Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine3Prefix

`func (o *ImportInterfaceRoomsType) SetLine3Prefix(v int32)`

SetLine3Prefix sets Line3Prefix field to given value.

### HasLine3Prefix

`func (o *ImportInterfaceRoomsType) HasLine3Prefix() bool`

HasLine3Prefix returns a boolean if a field has been set.

### GetLine3AddTo

`func (o *ImportInterfaceRoomsType) GetLine3AddTo() int32`

GetLine3AddTo returns the Line3AddTo field if non-nil, zero value otherwise.

### GetLine3AddToOk

`func (o *ImportInterfaceRoomsType) GetLine3AddToOk() (*int32, bool)`

GetLine3AddToOk returns a tuple with the Line3AddTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine3AddTo

`func (o *ImportInterfaceRoomsType) SetLine3AddTo(v int32)`

SetLine3AddTo sets Line3AddTo field to given value.

### HasLine3AddTo

`func (o *ImportInterfaceRoomsType) HasLine3AddTo() bool`

HasLine3AddTo returns a boolean if a field has been set.

### GetLine4Prefix

`func (o *ImportInterfaceRoomsType) GetLine4Prefix() int32`

GetLine4Prefix returns the Line4Prefix field if non-nil, zero value otherwise.

### GetLine4PrefixOk

`func (o *ImportInterfaceRoomsType) GetLine4PrefixOk() (*int32, bool)`

GetLine4PrefixOk returns a tuple with the Line4Prefix field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine4Prefix

`func (o *ImportInterfaceRoomsType) SetLine4Prefix(v int32)`

SetLine4Prefix sets Line4Prefix field to given value.

### HasLine4Prefix

`func (o *ImportInterfaceRoomsType) HasLine4Prefix() bool`

HasLine4Prefix returns a boolean if a field has been set.

### GetLine4AddTo

`func (o *ImportInterfaceRoomsType) GetLine4AddTo() int32`

GetLine4AddTo returns the Line4AddTo field if non-nil, zero value otherwise.

### GetLine4AddToOk

`func (o *ImportInterfaceRoomsType) GetLine4AddToOk() (*int32, bool)`

GetLine4AddToOk returns a tuple with the Line4AddTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLine4AddTo

`func (o *ImportInterfaceRoomsType) SetLine4AddTo(v int32)`

SetLine4AddTo sets Line4AddTo field to given value.

### HasLine4AddTo

`func (o *ImportInterfaceRoomsType) HasLine4AddTo() bool`

HasLine4AddTo returns a boolean if a field has been set.

### GetSelectedRoomTypes

`func (o *ImportInterfaceRoomsType) GetSelectedRoomTypes() string`

GetSelectedRoomTypes returns the SelectedRoomTypes field if non-nil, zero value otherwise.

### GetSelectedRoomTypesOk

`func (o *ImportInterfaceRoomsType) GetSelectedRoomTypesOk() (*string, bool)`

GetSelectedRoomTypesOk returns a tuple with the SelectedRoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelectedRoomTypes

`func (o *ImportInterfaceRoomsType) SetSelectedRoomTypes(v string)`

SetSelectedRoomTypes sets SelectedRoomTypes field to given value.

### HasSelectedRoomTypes

`func (o *ImportInterfaceRoomsType) HasSelectedRoomTypes() bool`

HasSelectedRoomTypes returns a boolean if a field has been set.

### GetMaskLines

`func (o *ImportInterfaceRoomsType) GetMaskLines() []RoomMaskSetupType`

GetMaskLines returns the MaskLines field if non-nil, zero value otherwise.

### GetMaskLinesOk

`func (o *ImportInterfaceRoomsType) GetMaskLinesOk() (*[]RoomMaskSetupType, bool)`

GetMaskLinesOk returns a tuple with the MaskLines field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaskLines

`func (o *ImportInterfaceRoomsType) SetMaskLines(v []RoomMaskSetupType)`

SetMaskLines sets MaskLines field to given value.

### HasMaskLines

`func (o *ImportInterfaceRoomsType) HasMaskLines() bool`

HasMaskLines returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


