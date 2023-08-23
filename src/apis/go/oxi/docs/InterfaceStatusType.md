# InterfaceStatusType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceId** | Pointer to **string** | Interface ID for which processor will be started. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code which is associated with Interface ID will be processed. | [optional] 
**Description** | Pointer to **string** | Description of Interface ID. | [optional] 
**ProcessType** | Pointer to [**InterfaceStatusProcessTypeType**](InterfaceStatusProcessTypeType.md) |  | [optional] 
**ProcessRole** | Pointer to [**InterfaceStatusProcessRoleType**](InterfaceStatusProcessRoleType.md) |  | [optional] 
**Status** | Pointer to [**ExchangeInterfaceStatusType**](ExchangeInterfaceStatusType.md) |  | [optional] 
**Command** | Pointer to [**ExchangeInterfaceStatusCommandType**](ExchangeInterfaceStatusCommandType.md) |  | [optional] 
**UpdatedTime** | Pointer to **string** | Indicates time at which process started. | [optional] 
**User** | Pointer to **string** | User who started the processor. | [optional] 
**SystemType** | Pointer to **string** | The System type for which Interface Setups have to be listed like OXI, OXIHub. | [optional] 

## Methods

### NewInterfaceStatusType

`func NewInterfaceStatusType() *InterfaceStatusType`

NewInterfaceStatusType instantiates a new InterfaceStatusType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewInterfaceStatusTypeWithDefaults

`func NewInterfaceStatusTypeWithDefaults() *InterfaceStatusType`

NewInterfaceStatusTypeWithDefaults instantiates a new InterfaceStatusType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceId

`func (o *InterfaceStatusType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *InterfaceStatusType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *InterfaceStatusType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *InterfaceStatusType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetHotelId

`func (o *InterfaceStatusType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *InterfaceStatusType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *InterfaceStatusType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *InterfaceStatusType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetDescription

`func (o *InterfaceStatusType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *InterfaceStatusType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *InterfaceStatusType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *InterfaceStatusType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetProcessType

`func (o *InterfaceStatusType) GetProcessType() InterfaceStatusProcessTypeType`

GetProcessType returns the ProcessType field if non-nil, zero value otherwise.

### GetProcessTypeOk

`func (o *InterfaceStatusType) GetProcessTypeOk() (*InterfaceStatusProcessTypeType, bool)`

GetProcessTypeOk returns a tuple with the ProcessType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessType

`func (o *InterfaceStatusType) SetProcessType(v InterfaceStatusProcessTypeType)`

SetProcessType sets ProcessType field to given value.

### HasProcessType

`func (o *InterfaceStatusType) HasProcessType() bool`

HasProcessType returns a boolean if a field has been set.

### GetProcessRole

`func (o *InterfaceStatusType) GetProcessRole() InterfaceStatusProcessRoleType`

GetProcessRole returns the ProcessRole field if non-nil, zero value otherwise.

### GetProcessRoleOk

`func (o *InterfaceStatusType) GetProcessRoleOk() (*InterfaceStatusProcessRoleType, bool)`

GetProcessRoleOk returns a tuple with the ProcessRole field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessRole

`func (o *InterfaceStatusType) SetProcessRole(v InterfaceStatusProcessRoleType)`

SetProcessRole sets ProcessRole field to given value.

### HasProcessRole

`func (o *InterfaceStatusType) HasProcessRole() bool`

HasProcessRole returns a boolean if a field has been set.

### GetStatus

`func (o *InterfaceStatusType) GetStatus() ExchangeInterfaceStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *InterfaceStatusType) GetStatusOk() (*ExchangeInterfaceStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *InterfaceStatusType) SetStatus(v ExchangeInterfaceStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *InterfaceStatusType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCommand

`func (o *InterfaceStatusType) GetCommand() ExchangeInterfaceStatusCommandType`

GetCommand returns the Command field if non-nil, zero value otherwise.

### GetCommandOk

`func (o *InterfaceStatusType) GetCommandOk() (*ExchangeInterfaceStatusCommandType, bool)`

GetCommandOk returns a tuple with the Command field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommand

`func (o *InterfaceStatusType) SetCommand(v ExchangeInterfaceStatusCommandType)`

SetCommand sets Command field to given value.

### HasCommand

`func (o *InterfaceStatusType) HasCommand() bool`

HasCommand returns a boolean if a field has been set.

### GetUpdatedTime

`func (o *InterfaceStatusType) GetUpdatedTime() string`

GetUpdatedTime returns the UpdatedTime field if non-nil, zero value otherwise.

### GetUpdatedTimeOk

`func (o *InterfaceStatusType) GetUpdatedTimeOk() (*string, bool)`

GetUpdatedTimeOk returns a tuple with the UpdatedTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedTime

`func (o *InterfaceStatusType) SetUpdatedTime(v string)`

SetUpdatedTime sets UpdatedTime field to given value.

### HasUpdatedTime

`func (o *InterfaceStatusType) HasUpdatedTime() bool`

HasUpdatedTime returns a boolean if a field has been set.

### GetUser

`func (o *InterfaceStatusType) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *InterfaceStatusType) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *InterfaceStatusType) SetUser(v string)`

SetUser sets User field to given value.

### HasUser

`func (o *InterfaceStatusType) HasUser() bool`

HasUser returns a boolean if a field has been set.

### GetSystemType

`func (o *InterfaceStatusType) GetSystemType() string`

GetSystemType returns the SystemType field if non-nil, zero value otherwise.

### GetSystemTypeOk

`func (o *InterfaceStatusType) GetSystemTypeOk() (*string, bool)`

GetSystemTypeOk returns a tuple with the SystemType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemType

`func (o *InterfaceStatusType) SetSystemType(v string)`

SetSystemType sets SystemType field to given value.

### HasSystemType

`func (o *InterfaceStatusType) HasSystemType() bool`

HasSystemType returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


