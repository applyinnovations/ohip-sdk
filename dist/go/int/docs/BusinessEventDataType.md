# BusinessEventDataType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessEvent** | Pointer to [**BusinessEventType**](BusinessEventType.md) |  | [optional] 
**BusinessEventId** | Pointer to [**BusinessEventIDType**](BusinessEventIDType.md) |  | [optional] 

## Methods

### NewBusinessEventDataType

`func NewBusinessEventDataType() *BusinessEventDataType`

NewBusinessEventDataType instantiates a new BusinessEventDataType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBusinessEventDataTypeWithDefaults

`func NewBusinessEventDataTypeWithDefaults() *BusinessEventDataType`

NewBusinessEventDataTypeWithDefaults instantiates a new BusinessEventDataType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessEvent

`func (o *BusinessEventDataType) GetBusinessEvent() BusinessEventType`

GetBusinessEvent returns the BusinessEvent field if non-nil, zero value otherwise.

### GetBusinessEventOk

`func (o *BusinessEventDataType) GetBusinessEventOk() (*BusinessEventType, bool)`

GetBusinessEventOk returns a tuple with the BusinessEvent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessEvent

`func (o *BusinessEventDataType) SetBusinessEvent(v BusinessEventType)`

SetBusinessEvent sets BusinessEvent field to given value.

### HasBusinessEvent

`func (o *BusinessEventDataType) HasBusinessEvent() bool`

HasBusinessEvent returns a boolean if a field has been set.

### GetBusinessEventId

`func (o *BusinessEventDataType) GetBusinessEventId() BusinessEventIDType`

GetBusinessEventId returns the BusinessEventId field if non-nil, zero value otherwise.

### GetBusinessEventIdOk

`func (o *BusinessEventDataType) GetBusinessEventIdOk() (*BusinessEventIDType, bool)`

GetBusinessEventIdOk returns a tuple with the BusinessEventId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessEventId

`func (o *BusinessEventDataType) SetBusinessEventId(v BusinessEventIDType)`

SetBusinessEventId sets BusinessEventId field to given value.

### HasBusinessEventId

`func (o *BusinessEventDataType) HasBusinessEventId() bool`

HasBusinessEventId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


