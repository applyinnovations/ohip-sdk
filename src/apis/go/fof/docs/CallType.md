# CallType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DateTimeSpan** | Pointer to [**DateTimeSpanType**](DateTimeSpanType.md) |  | [optional] 
**Caller** | Pointer to [**CallerType**](CallerType.md) |  | [optional] 
**Reservation** | Pointer to [**CallTypeReservation**](CallTypeReservation.md) |  | [optional] 
**TurnawayCode** | Pointer to **string** | Call turn away code. | [optional] 
**Comments** | Pointer to **string** | Call comments. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 

## Methods

### NewCallType

`func NewCallType() *CallType`

NewCallType instantiates a new CallType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCallTypeWithDefaults

`func NewCallTypeWithDefaults() *CallType`

NewCallTypeWithDefaults instantiates a new CallType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDateTimeSpan

`func (o *CallType) GetDateTimeSpan() DateTimeSpanType`

GetDateTimeSpan returns the DateTimeSpan field if non-nil, zero value otherwise.

### GetDateTimeSpanOk

`func (o *CallType) GetDateTimeSpanOk() (*DateTimeSpanType, bool)`

GetDateTimeSpanOk returns a tuple with the DateTimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTimeSpan

`func (o *CallType) SetDateTimeSpan(v DateTimeSpanType)`

SetDateTimeSpan sets DateTimeSpan field to given value.

### HasDateTimeSpan

`func (o *CallType) HasDateTimeSpan() bool`

HasDateTimeSpan returns a boolean if a field has been set.

### GetCaller

`func (o *CallType) GetCaller() CallerType`

GetCaller returns the Caller field if non-nil, zero value otherwise.

### GetCallerOk

`func (o *CallType) GetCallerOk() (*CallerType, bool)`

GetCallerOk returns a tuple with the Caller field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaller

`func (o *CallType) SetCaller(v CallerType)`

SetCaller sets Caller field to given value.

### HasCaller

`func (o *CallType) HasCaller() bool`

HasCaller returns a boolean if a field has been set.

### GetReservation

`func (o *CallType) GetReservation() CallTypeReservation`

GetReservation returns the Reservation field if non-nil, zero value otherwise.

### GetReservationOk

`func (o *CallType) GetReservationOk() (*CallTypeReservation, bool)`

GetReservationOk returns a tuple with the Reservation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservation

`func (o *CallType) SetReservation(v CallTypeReservation)`

SetReservation sets Reservation field to given value.

### HasReservation

`func (o *CallType) HasReservation() bool`

HasReservation returns a boolean if a field has been set.

### GetTurnawayCode

`func (o *CallType) GetTurnawayCode() string`

GetTurnawayCode returns the TurnawayCode field if non-nil, zero value otherwise.

### GetTurnawayCodeOk

`func (o *CallType) GetTurnawayCodeOk() (*string, bool)`

GetTurnawayCodeOk returns a tuple with the TurnawayCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTurnawayCode

`func (o *CallType) SetTurnawayCode(v string)`

SetTurnawayCode sets TurnawayCode field to given value.

### HasTurnawayCode

`func (o *CallType) HasTurnawayCode() bool`

HasTurnawayCode returns a boolean if a field has been set.

### GetComments

`func (o *CallType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *CallType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *CallType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *CallType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetUrl

`func (o *CallType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CallType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CallType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CallType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *CallType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CallType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CallType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CallType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *CallType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *CallType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *CallType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *CallType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *CallType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *CallType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *CallType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *CallType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *CallType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CallType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CallType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CallType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *CallType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *CallType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *CallType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *CallType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


