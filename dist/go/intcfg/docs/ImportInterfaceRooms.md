# ImportInterfaceRooms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Details** | Pointer to [**ImportInterfaceRoomsType**](ImportInterfaceRoomsType.md) |  | [optional] 
**DMLCommand** | Pointer to [**DMLCommandType**](DMLCommandType.md) |  | [optional] 
**TargetedImport** | Pointer to [**InterfaceRoomType**](InterfaceRoomType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewImportInterfaceRooms

`func NewImportInterfaceRooms() *ImportInterfaceRooms`

NewImportInterfaceRooms instantiates a new ImportInterfaceRooms object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportInterfaceRoomsWithDefaults

`func NewImportInterfaceRoomsWithDefaults() *ImportInterfaceRooms`

NewImportInterfaceRoomsWithDefaults instantiates a new ImportInterfaceRooms object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetails

`func (o *ImportInterfaceRooms) GetDetails() ImportInterfaceRoomsType`

GetDetails returns the Details field if non-nil, zero value otherwise.

### GetDetailsOk

`func (o *ImportInterfaceRooms) GetDetailsOk() (*ImportInterfaceRoomsType, bool)`

GetDetailsOk returns a tuple with the Details field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetails

`func (o *ImportInterfaceRooms) SetDetails(v ImportInterfaceRoomsType)`

SetDetails sets Details field to given value.

### HasDetails

`func (o *ImportInterfaceRooms) HasDetails() bool`

HasDetails returns a boolean if a field has been set.

### GetDMLCommand

`func (o *ImportInterfaceRooms) GetDMLCommand() DMLCommandType`

GetDMLCommand returns the DMLCommand field if non-nil, zero value otherwise.

### GetDMLCommandOk

`func (o *ImportInterfaceRooms) GetDMLCommandOk() (*DMLCommandType, bool)`

GetDMLCommandOk returns a tuple with the DMLCommand field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDMLCommand

`func (o *ImportInterfaceRooms) SetDMLCommand(v DMLCommandType)`

SetDMLCommand sets DMLCommand field to given value.

### HasDMLCommand

`func (o *ImportInterfaceRooms) HasDMLCommand() bool`

HasDMLCommand returns a boolean if a field has been set.

### GetTargetedImport

`func (o *ImportInterfaceRooms) GetTargetedImport() InterfaceRoomType`

GetTargetedImport returns the TargetedImport field if non-nil, zero value otherwise.

### GetTargetedImportOk

`func (o *ImportInterfaceRooms) GetTargetedImportOk() (*InterfaceRoomType, bool)`

GetTargetedImportOk returns a tuple with the TargetedImport field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetedImport

`func (o *ImportInterfaceRooms) SetTargetedImport(v InterfaceRoomType)`

SetTargetedImport sets TargetedImport field to given value.

### HasTargetedImport

`func (o *ImportInterfaceRooms) HasTargetedImport() bool`

HasTargetedImport returns a boolean if a field has been set.

### GetLinks

`func (o *ImportInterfaceRooms) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ImportInterfaceRooms) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ImportInterfaceRooms) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ImportInterfaceRooms) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ImportInterfaceRooms) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ImportInterfaceRooms) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ImportInterfaceRooms) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ImportInterfaceRooms) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


