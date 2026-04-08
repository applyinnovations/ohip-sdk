# CustomizedLetterType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code that the customized letter belongs to. | [optional] 
**ReservationId** | Pointer to [**UniqueIDType**](UniqueIDType.md) |  | [optional] 
**CustomizedLetter** | Pointer to **string** | Customized letter in HTML or RTF format. | [optional] 
**Url** | Pointer to **string** | URL that identifies the location associated with the record identified by the UniqueID. | [optional] 
**Type** | Pointer to **string** | A reference to the type of object defined by the UniqueID element. | [optional] 
**Instance** | Pointer to **string** | The identification of a record as it exists at a point in time. An instance is used in update messages where the sender must assure the server that the update sent refers to the most recent modification level of the object being updated. | [optional] 
**IdContext** | Pointer to **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [optional] 
**Id** | Pointer to **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | [optional] 
**IdExtension** | Pointer to **int32** | Additional identifying value assigned by the creating system. | [optional] 

## Methods

### NewCustomizedLetterType

`func NewCustomizedLetterType() *CustomizedLetterType`

NewCustomizedLetterType instantiates a new CustomizedLetterType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomizedLetterTypeWithDefaults

`func NewCustomizedLetterTypeWithDefaults() *CustomizedLetterType`

NewCustomizedLetterTypeWithDefaults instantiates a new CustomizedLetterType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *CustomizedLetterType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CustomizedLetterType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CustomizedLetterType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CustomizedLetterType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetReservationId

`func (o *CustomizedLetterType) GetReservationId() UniqueIDType`

GetReservationId returns the ReservationId field if non-nil, zero value otherwise.

### GetReservationIdOk

`func (o *CustomizedLetterType) GetReservationIdOk() (*UniqueIDType, bool)`

GetReservationIdOk returns a tuple with the ReservationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReservationId

`func (o *CustomizedLetterType) SetReservationId(v UniqueIDType)`

SetReservationId sets ReservationId field to given value.

### HasReservationId

`func (o *CustomizedLetterType) HasReservationId() bool`

HasReservationId returns a boolean if a field has been set.

### GetCustomizedLetter

`func (o *CustomizedLetterType) GetCustomizedLetter() string`

GetCustomizedLetter returns the CustomizedLetter field if non-nil, zero value otherwise.

### GetCustomizedLetterOk

`func (o *CustomizedLetterType) GetCustomizedLetterOk() (*string, bool)`

GetCustomizedLetterOk returns a tuple with the CustomizedLetter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCustomizedLetter

`func (o *CustomizedLetterType) SetCustomizedLetter(v string)`

SetCustomizedLetter sets CustomizedLetter field to given value.

### HasCustomizedLetter

`func (o *CustomizedLetterType) HasCustomizedLetter() bool`

HasCustomizedLetter returns a boolean if a field has been set.

### GetUrl

`func (o *CustomizedLetterType) GetUrl() string`

GetUrl returns the Url field if non-nil, zero value otherwise.

### GetUrlOk

`func (o *CustomizedLetterType) GetUrlOk() (*string, bool)`

GetUrlOk returns a tuple with the Url field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUrl

`func (o *CustomizedLetterType) SetUrl(v string)`

SetUrl sets Url field to given value.

### HasUrl

`func (o *CustomizedLetterType) HasUrl() bool`

HasUrl returns a boolean if a field has been set.

### GetType

`func (o *CustomizedLetterType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CustomizedLetterType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CustomizedLetterType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CustomizedLetterType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetInstance

`func (o *CustomizedLetterType) GetInstance() string`

GetInstance returns the Instance field if non-nil, zero value otherwise.

### GetInstanceOk

`func (o *CustomizedLetterType) GetInstanceOk() (*string, bool)`

GetInstanceOk returns a tuple with the Instance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInstance

`func (o *CustomizedLetterType) SetInstance(v string)`

SetInstance sets Instance field to given value.

### HasInstance

`func (o *CustomizedLetterType) HasInstance() bool`

HasInstance returns a boolean if a field has been set.

### GetIdContext

`func (o *CustomizedLetterType) GetIdContext() string`

GetIdContext returns the IdContext field if non-nil, zero value otherwise.

### GetIdContextOk

`func (o *CustomizedLetterType) GetIdContextOk() (*string, bool)`

GetIdContextOk returns a tuple with the IdContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdContext

`func (o *CustomizedLetterType) SetIdContext(v string)`

SetIdContext sets IdContext field to given value.

### HasIdContext

`func (o *CustomizedLetterType) HasIdContext() bool`

HasIdContext returns a boolean if a field has been set.

### GetId

`func (o *CustomizedLetterType) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CustomizedLetterType) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CustomizedLetterType) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CustomizedLetterType) HasId() bool`

HasId returns a boolean if a field has been set.

### GetIdExtension

`func (o *CustomizedLetterType) GetIdExtension() int32`

GetIdExtension returns the IdExtension field if non-nil, zero value otherwise.

### GetIdExtensionOk

`func (o *CustomizedLetterType) GetIdExtensionOk() (*int32, bool)`

GetIdExtensionOk returns a tuple with the IdExtension field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdExtension

`func (o *CustomizedLetterType) SetIdExtension(v int32)`

SetIdExtension sets IdExtension field to given value.

### HasIdExtension

`func (o *CustomizedLetterType) HasIdExtension() bool`

HasIdExtension returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


