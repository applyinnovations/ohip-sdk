# LinkedReservationsInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**ReservationInfo** | Pointer to [**[]LinkedReservationInfoType**](LinkedReservationInfoType.md) |  | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID elementSpace. Refer to OpenTravel Code List Unique ID Type (UIT). | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 

## Methods

### NewLinkedReservationsInfoType

`func NewLinkedReservationsInfoType() *LinkedReservationsInfoType`

NewLinkedReservationsInfoType instantiates a new LinkedReservationsInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLinkedReservationsInfoTypeWithDefaults

`func NewLinkedReservationsInfoTypeWithDefaults() *LinkedReservationsInfoType`

NewLinkedReservationsInfoTypeWithDefaults instantiates a new LinkedReservationsInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LinkedReservationsInfoType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LinkedReservationsInfoType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LinkedReservationsInfoType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LinkedReservationsInfoType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdContext

`func (o *LinkedReservationsInfoType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *LinkedReservationsInfoType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *LinkedReservationsInfoType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *LinkedReservationsInfoType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetIdExtension

`func (o *LinkedReservationsInfoType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *LinkedReservationsInfoType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *LinkedReservationsInfoType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *LinkedReservationsInfoType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.

### GetInstance

`func (o *LinkedReservationsInfoType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *LinkedReservationsInfoType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *LinkedReservationsInfoType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *LinkedReservationsInfoType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetReservationInfo

`func (o *LinkedReservationsInfoType) GetReservationInfo() []LinkedReservationInfoType`

GetReservationInfo returns the ReservationInfo field if non-nil, zero value otherwise.

### GetReservationInfoOk

`func (o *LinkedReservationsInfoType) GetReservationInfoOk() (*[]LinkedReservationInfoType, bool)`

GetReservationInfoOk returns a tuple with the ReservationInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationInfo

`func (o *LinkedReservationsInfoType) SetReservationInfo(v []LinkedReservationInfoType)`

SetReservationInfo sets ReservationInfo field to given value.

### HasReservationInfo

`func (o *LinkedReservationsInfoType) HasReservationInfo() bool`

HasReservationInfo returns a boolean if a field has been set.

### GetType

`func (o *LinkedReservationsInfoType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LinkedReservationsInfoType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LinkedReservationsInfoType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *LinkedReservationsInfoType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetUrl

`func (o *LinkedReservationsInfoType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *LinkedReservationsInfoType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *LinkedReservationsInfoType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *LinkedReservationsInfoType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


