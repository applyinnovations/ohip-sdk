# BlockTraceType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeInfo** | Pointer to [**TraceTimeInfoType**](TraceTimeInfoType.md) |  | [optional] 
**ReservationId** | Pointer to [**ReservationId**](ReservationId.md) |  | [optional] 
**DepartmentId** | Pointer to **string** | Indicates the Department code. | [optional] 
**TraceText** | Pointer to **string** | The information this trace contains. | [optional] 
**ResolveInfo** | Pointer to [**TraceResolveType**](TraceResolveType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**CreateDateTime** | Pointer to **string** | Time stamp of the creation. | [optional] 
**CreatorId** | Pointer to **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | [optional] 
**LastModifyDateTime** | Pointer to **string** | Time stamp of last modification. | [optional] 
**LastModifierId** | Pointer to **string** | Identifies the last software system or person to modify a record. | [optional] 

## Methods

### NewBlockTraceType

`func NewBlockTraceType() *BlockTraceType`

NewBlockTraceType instantiates a new BlockTraceType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBlockTraceTypeWithDefaults

`func NewBlockTraceTypeWithDefaults() *BlockTraceType`

NewBlockTraceTypeWithDefaults instantiates a new BlockTraceType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTimeInfo

`func (o *BlockTraceType) GetTimeInfo() TraceTimeInfoType`

GetTimeInfo returns the TimeInfo field if non-nil, zero value otherwise.

### GetTimeInfoOk

`func (o *BlockTraceType) GetTimeInfoOk() (*TraceTimeInfoType, bool)`

GetTimeInfoOk returns a tuple with the TimeInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeInfo

`func (o *BlockTraceType) SetTimeInfo(v TraceTimeInfoType)`

SetTimeInfo sets TimeInfo field to given value.

### HasTimeInfo

`func (o *BlockTraceType) HasTimeInfo() bool`

HasTimeInfo returns a boolean if a field has been set.

### GetReservationId

`func (o *BlockTraceType) GetReservationId() ReservationId`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *BlockTraceType) GetReservationIdOk() (*ReservationId, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *BlockTraceType) SetReservationId(v ReservationId)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *BlockTraceType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetDepartmentId

`func (o *BlockTraceType) GetDepartmentId() string`

GetDepartmentId returns the DepartmentId field if non-nil, zero value otherwise.

### GetDepartmentIdOk

`func (o *BlockTraceType) GetDepartmentIdOk() (*string, bool)`

GetDepartmentIdOk returns a tuple with the DepartmentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDepartmentId

`func (o *BlockTraceType) SetDepartmentId(v string)`

SetDepartmentId sets DepartmentId field to given value.

### HasDepartmentId

`func (o *BlockTraceType) HasDepartmentId() bool`

HasDepartmentId returns a boolean if a field has been set.

### GetTraceText

`func (o *BlockTraceType) GetTraceText() string`

GetTraceText returns the TraceText field if non-nil, zero value otherwise.

### GetTraceTextOk

`func (o *BlockTraceType) GetTraceTextOk() (*string, bool)`

GetTraceTextOk returns a tuple with the TraceText field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTraceText

`func (o *BlockTraceType) SetTraceText(v string)`

SetTraceText sets TraceText field to given value.

### HasTraceText

`func (o *BlockTraceType) HasTraceText() bool`

HasTraceText returns a boolean if a field has been set.

### GetResolveInfo

`func (o *BlockTraceType) GetResolveInfo() TraceResolveType`

GetResolveInfo returns the ResolveInfo field if non-nil, zero value otherwise.

### GetResolveInfoOk

`func (o *BlockTraceType) GetResolveInfoOk() (*TraceResolveType, bool)`

GetResolveInfoOk returns a tuple with the ResolveInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResolveInfo

`func (o *BlockTraceType) SetResolveInfo(v TraceResolveType)`

SetResolveInfo sets ResolveInfo field to given value.

### HasResolveInfo

`func (o *BlockTraceType) HasResolveInfo() bool`

HasResolveInfo returns a boolean if a field has been set.

### GetType

`func (o *BlockTraceType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BlockTraceType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BlockTraceType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BlockTraceType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *BlockTraceType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *BlockTraceType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *BlockTraceType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *BlockTraceType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *BlockTraceType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *BlockTraceType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *BlockTraceType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *BlockTraceType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *BlockTraceType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BlockTraceType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BlockTraceType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BlockTraceType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCreateDateTime

`func (o *BlockTraceType) GetCreateDateTime() string`

GetCreateDateTime returns the CreateDateTime field if non-nil, zero value otherwise.

### GetCreateDateTimeOk

`func (o *BlockTraceType) GetCreateDateTimeOk() (*string, bool)`

GetCreateDateTimeOk returns a tuple with the CreateDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDateTime

`func (o *BlockTraceType) SetCreateDateTime(v string)`

SetCreateDateTime sets CreateDateTime field to given value.

### HasCreateDateTime

`func (o *BlockTraceType) HasCreateDateTime() bool`

HasCreateDateTime returns a boolean if a field has been set.

### GetCreatorId

`func (o *BlockTraceType) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *BlockTraceType) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *BlockTraceType) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *BlockTraceType) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetLastModifyDateTime

`func (o *BlockTraceType) GetLastModifyDateTime() string`

GetLastModifyDateTime returns the LastModifyDateTime field if non-nil, zero value otherwise.

### GetLastModifyDateTimeOk

`func (o *BlockTraceType) GetLastModifyDateTimeOk() (*string, bool)`

GetLastModifyDateTimeOk returns a tuple with the LastModifyDateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifyDateTime

`func (o *BlockTraceType) SetLastModifyDateTime(v string)`

SetLastModifyDateTime sets LastModifyDateTime field to given value.

### HasLastModifyDateTime

`func (o *BlockTraceType) HasLastModifyDateTime() bool`

HasLastModifyDateTime returns a boolean if a field has been set.

### GetLastModifierId

`func (o *BlockTraceType) GetLastModifierId() string`

GetLastModifierId returns the LastModifierId field if non-nil, zero value otherwise.

### GetLastModifierIdOk

`func (o *BlockTraceType) GetLastModifierIdOk() (*string, bool)`

GetLastModifierIdOk returns a tuple with the LastModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastModifierId

`func (o *BlockTraceType) SetLastModifierId(v string)`

SetLastModifierId sets LastModifierId field to given value.

### HasLastModifierId

`func (o *BlockTraceType) HasLastModifierId() bool`

HasLastModifierId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


