# AccumulatedBusinessEventType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryKey** | Pointer to **string** | Primary Key identifier assigned to the business event. | [optional] 
**Status** | Pointer to [**AccumulatedBusinessEventStatusType**](AccumulatedBusinessEventStatusType.md) |  | [optional] 
**CreateDate** | Pointer to **time.Time** | Data when the message was created by external systems | [optional] 
**Interface** | Pointer to **string** | The interface this message was created for | [optional] 
**Module** | Pointer to **string** | Data module of outgoing message. This identifies the kind of message sent (e.g., reservation, profile, rate, block, rate restriction, inventory, and result) | [optional] 
**HotelId** | Pointer to **string** | Property this message was sent from. | [optional] 

## Methods

### NewAccumulatedBusinessEventType

`func NewAccumulatedBusinessEventType() *AccumulatedBusinessEventType`

NewAccumulatedBusinessEventType instantiates a new AccumulatedBusinessEventType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccumulatedBusinessEventTypeWithDefaults

`func NewAccumulatedBusinessEventTypeWithDefaults() *AccumulatedBusinessEventType`

NewAccumulatedBusinessEventTypeWithDefaults instantiates a new AccumulatedBusinessEventType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryKey

`func (o *AccumulatedBusinessEventType) GetPrimaryKey() string`

GetPrimaryKey returns the PrimaryKey field if non-nil, zero value otherwise.

### GetPrimaryKeyOk

`func (o *AccumulatedBusinessEventType) GetPrimaryKeyOk() (*string, bool)`

GetPrimaryKeyOk returns a tuple with the PrimaryKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryKey

`func (o *AccumulatedBusinessEventType) SetPrimaryKey(v string)`

SetPrimaryKey sets PrimaryKey field to given value.

### HasPrimaryKey

`func (o *AccumulatedBusinessEventType) HasPrimaryKey() bool`

HasPrimaryKey returns a boolean if a field has been set.

### GetStatus

`func (o *AccumulatedBusinessEventType) GetStatus() AccumulatedBusinessEventStatusType`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccumulatedBusinessEventType) GetStatusOk() (*AccumulatedBusinessEventStatusType, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccumulatedBusinessEventType) SetStatus(v AccumulatedBusinessEventStatusType)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccumulatedBusinessEventType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetCreateDate

`func (o *AccumulatedBusinessEventType) GetCreateDate() time.Time`

GetCreateDate returns the CreateDate field if non-nil, zero value otherwise.

### GetCreateDateOk

`func (o *AccumulatedBusinessEventType) GetCreateDateOk() (*time.Time, bool)`

GetCreateDateOk returns a tuple with the CreateDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreateDate

`func (o *AccumulatedBusinessEventType) SetCreateDate(v time.Time)`

SetCreateDate sets CreateDate field to given value.

### HasCreateDate

`func (o *AccumulatedBusinessEventType) HasCreateDate() bool`

HasCreateDate returns a boolean if a field has been set.

### GetInterface

`func (o *AccumulatedBusinessEventType) GetInterface() string`

GetInterface returns the Interface field if non-nil, zero value otherwise.

### GetInterfaceOk

`func (o *AccumulatedBusinessEventType) GetInterfaceOk() (*string, bool)`

GetInterfaceOk returns a tuple with the Interface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInterface

`func (o *AccumulatedBusinessEventType) SetInterface(v string)`

SetInterface sets Interface field to given value.

### HasInterface

`func (o *AccumulatedBusinessEventType) HasInterface() bool`

HasInterface returns a boolean if a field has been set.

### GetModule

`func (o *AccumulatedBusinessEventType) GetModule() string`

GetModule returns the Module field if non-nil, zero value otherwise.

### GetModuleOk

`func (o *AccumulatedBusinessEventType) GetModuleOk() (*string, bool)`

GetModuleOk returns a tuple with the Module field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModule

`func (o *AccumulatedBusinessEventType) SetModule(v string)`

SetModule sets Module field to given value.

### HasModule

`func (o *AccumulatedBusinessEventType) HasModule() bool`

HasModule returns a boolean if a field has been set.

### GetHotelId

`func (o *AccumulatedBusinessEventType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AccumulatedBusinessEventType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AccumulatedBusinessEventType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AccumulatedBusinessEventType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


