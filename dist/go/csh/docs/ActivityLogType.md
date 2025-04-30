# ActivityLogType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** |  | [optional] 
**Module** | Pointer to **string** |  | [optional] 
**LogDate** | Pointer to **string** |  | [optional] 
**RefActionId** | Pointer to **float32** |  | [optional] 
**LogUserId** | Pointer to **int32** |  | [optional] 
**LogUserName** | Pointer to **string** |  | [optional] 
**MachineStation** | Pointer to **string** |  | [optional] 
**CroCode** | Pointer to **string** |  | [optional] 
**ActionType** | Pointer to **string** |  | [optional] 
**ActionDescription** | Pointer to **string** |  | [optional] 
**IPAddress** | Pointer to **string** | The IP Address of the machine that performed the activity | [optional] 

## Methods

### NewActivityLogType

`func NewActivityLogType() *ActivityLogType`

NewActivityLogType instantiates a new ActivityLogType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityLogTypeWithDefaults

`func NewActivityLogTypeWithDefaults() *ActivityLogType`

NewActivityLogTypeWithDefaults instantiates a new ActivityLogType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ActivityLogType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ActivityLogType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ActivityLogType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ActivityLogType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetModule

`func (o *ActivityLogType) GetModule() string`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *ActivityLogType) GetModuleOk() (*string, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *ActivityLogType) SetModule(v string)`

SetModule sets Module field to given value.

### HasModule

`func (o *ActivityLogType) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetLogDate

`func (o *ActivityLogType) GetLogDate() string`

GetLogDate returns the LogDate field if non-nil, zero value otherwise.

### GetLogDateOk

`func (o *ActivityLogType) GetLogDateOk() (*string, bool)`

GetLogDateOk returns a tuple with the LogDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogDate

`func (o *ActivityLogType) SetLogDate(v string)`

SetLogDate sets LogDate field to given value.

### HasLogDate

`func (o *ActivityLogType) HasLogDate() bool`

HasLogDate returns a boolean if a field has been set.

### GetRefActionId

`func (o *ActivityLogType) GetRefActionId() float32`

GetRefActionId returns the RefActionId field if non-nil, zero value otherwise.

### GetRefActionIdOk

`func (o *ActivityLogType) GetRefActionIdOk() (*float32, bool)`

GetRefActionIdOk returns a tuple with the RefActionId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRefActionId

`func (o *ActivityLogType) SetRefActionId(v float32)`

SetRefActionId sets RefActionId field to given value.

### HasRefActionId

`func (o *ActivityLogType) HasRefActionId() bool`

HasRefActionId returns a boolean if a field has been set.

### GetLogUserId

`func (o *ActivityLogType) GetLogUserId() int32`

GetLogUserId returns the LogUserId field if non-nil, zero value otherwise.

### GetLogUserIdOk

`func (o *ActivityLogType) GetLogUserIdOk() (*int32, bool)`

GetLogUserIdOk returns a tuple with the LogUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserId

`func (o *ActivityLogType) SetLogUserId(v int32)`

SetLogUserId sets LogUserId field to given value.

### HasLogUserId

`func (o *ActivityLogType) HasLogUserId() bool`

HasLogUserId returns a boolean if a field has been set.

### GetLogUserName

`func (o *ActivityLogType) GetLogUserName() string`

GetLogUserName returns the LogUserName field if non-nil, zero value otherwise.

### GetLogUserNameOk

`func (o *ActivityLogType) GetLogUserNameOk() (*string, bool)`

GetLogUserNameOk returns a tuple with the LogUserName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogUserName

`func (o *ActivityLogType) SetLogUserName(v string)`

SetLogUserName sets LogUserName field to given value.

### HasLogUserName

`func (o *ActivityLogType) HasLogUserName() bool`

HasLogUserName returns a boolean if a field has been set.

### GetMachineStation

`func (o *ActivityLogType) GetMachineStation() string`

GetMachineStation returns the MachineStation field if non-nil, zero value otherwise.

### GetMachineStationOk

`func (o *ActivityLogType) GetMachineStationOk() (*string, bool)`

GetMachineStationOk returns a tuple with the MachineStation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineStation

`func (o *ActivityLogType) SetMachineStation(v string)`

SetMachineStation sets MachineStation field to given value.

### HasMachineStation

`func (o *ActivityLogType) HasMachineStation() bool`

HasMachineStation returns a boolean if a field has been set.

### GetCroCode

`func (o *ActivityLogType) GetCroCode() string`

GetCroCode returns the CroCode field if non-nil, zero value otherwise.

### GetCroCodeOk

`func (o *ActivityLogType) GetCroCodeOk() (*string, bool)`

GetCroCodeOk returns a tuple with the CroCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCroCode

`func (o *ActivityLogType) SetCroCode(v string)`

SetCroCode sets CroCode field to given value.

### HasCroCode

`func (o *ActivityLogType) HasCroCode() bool`

HasCroCode returns a boolean if a field has been set.

### GetActionType

`func (o *ActivityLogType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *ActivityLogType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *ActivityLogType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *ActivityLogType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetActionDescription

`func (o *ActivityLogType) GetActionDescription() string`

GetActionDescription returns the ActionDescription field if non-nil, zero value otherwise.

### GetActionDescriptionOk

`func (o *ActivityLogType) GetActionDescriptionOk() (*string, bool)`

GetActionDescriptionOk returns a tuple with the ActionDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionDescription

`func (o *ActivityLogType) SetActionDescription(v string)`

SetActionDescription sets ActionDescription field to given value.

### HasActionDescription

`func (o *ActivityLogType) HasActionDescription() bool`

HasActionDescription returns a boolean if a field has been set.

### GetIPAddress

`func (o *ActivityLogType) GetIPAddress() string`

GetIPAddress returns the IPAddress field if non-nil, zero value otherwise.

### GetIPAddressOk

`func (o *ActivityLogType) GetIPAddressOk() (*string, bool)`

GetIPAddressOk returns a tuple with the IPAddress field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIPAddress

`func (o *ActivityLogType) SetIPAddress(v string)`

SetIPAddress sets IPAddress field to given value.

### HasIPAddress

`func (o *ActivityLogType) HasIPAddress() bool`

HasIPAddress returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


