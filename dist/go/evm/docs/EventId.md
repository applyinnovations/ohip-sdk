# EventId

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 

## Methods

### NewEventId

`func NewEventId() *EventId`

NewEventId instantiates a new EventId object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventIdWithDefaults

`func NewEventIdWithDefaults() *EventId`

NewEventIdWithDefaults instantiates a new EventId object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *EventId) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *EventId) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *EventId) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *EventId) HasType() bool`

HasType returns a boolean if a field has been set.

### GetIdContext

`func (o *EventId) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *EventId) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *EventId) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *EventId) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *EventId) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *EventId) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *EventId) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *EventId) HasId() bool`

HasId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


