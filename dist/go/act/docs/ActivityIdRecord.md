# ActivityIdRecord

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code to which activity belongs | [optional] 
**Id** | Pointer to **string** | Unique ID belonging to the activity. | [optional] 

## Methods

### NewActivityIdRecord

`func NewActivityIdRecord() *ActivityIdRecord`

NewActivityIdRecord instantiates a new ActivityIdRecord object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityIdRecordWithDefaults

`func NewActivityIdRecordWithDefaults() *ActivityIdRecord`

NewActivityIdRecordWithDefaults instantiates a new ActivityIdRecord object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ActivityIdRecord) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ActivityIdRecord) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ActivityIdRecord) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ActivityIdRecord) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetId

`func (o *ActivityIdRecord) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ActivityIdRecord) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ActivityIdRecord) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ActivityIdRecord) HasId() bool`

HasId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


