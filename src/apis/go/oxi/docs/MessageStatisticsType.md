# MessageStatisticsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**InterfaceId** | Pointer to **string** | InterfaceId of the Messages. | [optional] 
**HotelId** | Pointer to **string** | Property of the Messages. | [optional] 
**Module** | Pointer to **string** | Module name of messages. | [optional] 
**ActionType** | Pointer to **string** | Action Type of the messages. | [optional] 
**MessageStatus** | Pointer to [**OXIMessageStatusType**](OXIMessageStatusType.md) |  | [optional] 
**MessageCount** | Pointer to **int32** | Number of the messages | [optional] 
**LastProcessedDate** | Pointer to **time.Time** | Last date on which messages are processed for given criteria. | [optional] 

## Methods

### NewMessageStatisticsType

`func NewMessageStatisticsType() *MessageStatisticsType`

NewMessageStatisticsType instantiates a new MessageStatisticsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMessageStatisticsTypeWithDefaults

`func NewMessageStatisticsTypeWithDefaults() *MessageStatisticsType`

NewMessageStatisticsTypeWithDefaults instantiates a new MessageStatisticsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInterfaceId

`func (o *MessageStatisticsType) GetInterfaceId() string`

GetInterfaceId returns the InterfaceId field if non-nil, zero value otherwise.

### GetInterfaceIdOk

`func (o *MessageStatisticsType) GetInterfaceIdOk() (*string, bool)`

GetInterfaceIdOk returns a tuple with the InterfaceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterfaceId

`func (o *MessageStatisticsType) SetInterfaceId(v string)`

SetInterfaceId sets InterfaceId field to given value.

### HasInterfaceId

`func (o *MessageStatisticsType) HasInterfaceId() bool`

HasInterfaceId returns a boolean if a field has been set.

### GetHotelId

`func (o *MessageStatisticsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *MessageStatisticsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *MessageStatisticsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *MessageStatisticsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetModule

`func (o *MessageStatisticsType) GetModule() string`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *MessageStatisticsType) GetModuleOk() (*string, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *MessageStatisticsType) SetModule(v string)`

SetModule sets Module field to given value.

### HasModule

`func (o *MessageStatisticsType) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetActionType

`func (o *MessageStatisticsType) GetActionType() string`

GetActionType returns the ActionType field if non-nil, zero value otherwise.

### GetActionTypeOk

`func (o *MessageStatisticsType) GetActionTypeOk() (*string, bool)`

GetActionTypeOk returns a tuple with the ActionType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionType

`func (o *MessageStatisticsType) SetActionType(v string)`

SetActionType sets ActionType field to given value.

### HasActionType

`func (o *MessageStatisticsType) HasActionType() bool`

HasActionType returns a boolean if a field has been set.

### GetMessageStatus

`func (o *MessageStatisticsType) GetMessageStatus() OXIMessageStatusType`

GetMessageStatus returns the MessageStatus field if non-nil, zero value otherwise.

### GetMessageStatusOk

`func (o *MessageStatisticsType) GetMessageStatusOk() (*OXIMessageStatusType, bool)`

GetMessageStatusOk returns a tuple with the MessageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageStatus

`func (o *MessageStatisticsType) SetMessageStatus(v OXIMessageStatusType)`

SetMessageStatus sets MessageStatus field to given value.

### HasMessageStatus

`func (o *MessageStatisticsType) HasMessageStatus() bool`

HasMessageStatus returns a boolean if a field has been set.

### GetMessageCount

`func (o *MessageStatisticsType) GetMessageCount() int32`

GetMessageCount returns the MessageCount field if non-nil, zero value otherwise.

### GetMessageCountOk

`func (o *MessageStatisticsType) GetMessageCountOk() (*int32, bool)`

GetMessageCountOk returns a tuple with the MessageCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessageCount

`func (o *MessageStatisticsType) SetMessageCount(v int32)`

SetMessageCount sets MessageCount field to given value.

### HasMessageCount

`func (o *MessageStatisticsType) HasMessageCount() bool`

HasMessageCount returns a boolean if a field has been set.

### GetLastProcessedDate

`func (o *MessageStatisticsType) GetLastProcessedDate() time.Time`

GetLastProcessedDate returns the LastProcessedDate field if non-nil, zero value otherwise.

### GetLastProcessedDateOk

`func (o *MessageStatisticsType) GetLastProcessedDateOk() (*time.Time, bool)`

GetLastProcessedDateOk returns a tuple with the LastProcessedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastProcessedDate

`func (o *MessageStatisticsType) SetLastProcessedDate(v time.Time)`

SetLastProcessedDate sets LastProcessedDate field to given value.

### HasLastProcessedDate

`func (o *MessageStatisticsType) HasLastProcessedDate() bool`

HasLastProcessedDate returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


