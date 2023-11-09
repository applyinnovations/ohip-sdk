# FetchActivityBookingsType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Activities** | Pointer to [**ActivityList**](ActivityList.md) |  | [optional] 
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code, It is used to filter hotel specific children to this specific hotel code. | [optional] 
**PersonName** | Pointer to [**PersonNameType**](PersonNameType.md) |  | [optional] 
**ProfileId** | Pointer to [**UniqueIDListType**](UniqueIDListType.md) |  | [optional] 

## Methods

### NewFetchActivityBookingsType

`func NewFetchActivityBookingsType() *FetchActivityBookingsType`

NewFetchActivityBookingsType instantiates a new FetchActivityBookingsType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFetchActivityBookingsTypeWithDefaults

`func NewFetchActivityBookingsTypeWithDefaults() *FetchActivityBookingsType`

NewFetchActivityBookingsTypeWithDefaults instantiates a new FetchActivityBookingsType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetActivities

`func (o *FetchActivityBookingsType) GetActivities() ActivityList`

GetActivities returns the Activities field if non-nil, zero value otherwise.

### GetActivitiesOk

`func (o *FetchActivityBookingsType) GetActivitiesOk() (*ActivityList, bool)`

GetActivitiesOk returns a tuple with the Activities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivities

`func (o *FetchActivityBookingsType) SetActivities(v ActivityList)`

SetActivities sets Activities field to given value.

### HasActivities

`func (o *FetchActivityBookingsType) HasActivities() bool`

HasActivities returns a boolean if a field has been set.

### GetAddress

`func (o *FetchActivityBookingsType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *FetchActivityBookingsType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *FetchActivityBookingsType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *FetchActivityBookingsType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetHotelId

`func (o *FetchActivityBookingsType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FetchActivityBookingsType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FetchActivityBookingsType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FetchActivityBookingsType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetPersonName

`func (o *FetchActivityBookingsType) GetPersonName() PersonNameType`

GetPersonName returns the PersonName field if non-nil, zero value otherwise.

### GetPersonNameOk

`func (o *FetchActivityBookingsType) GetPersonNameOk() (*PersonNameType, bool)`

GetPersonNameOk returns a tuple with the PersonName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPersonName

`func (o *FetchActivityBookingsType) SetPersonName(v PersonNameType)`

SetPersonName sets PersonName field to given value.

### HasPersonName

`func (o *FetchActivityBookingsType) HasPersonName() bool`

HasPersonName returns a boolean if a field has been set.

### GetProfileId

`func (o *FetchActivityBookingsType) GetProfileId() UniqueIDListType`

GetProfileId returns the ProfileId field if non-nil, zero value otherwise.

### GetProfileIdOk

`func (o *FetchActivityBookingsType) GetProfileIdOk() (*UniqueIDListType, bool)`

GetProfileIdOk returns a tuple with the ProfileId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfileId

`func (o *FetchActivityBookingsType) SetProfileId(v UniqueIDListType)`

SetProfileId sets ProfileId field to given value.

### HasProfileId

`func (o *FetchActivityBookingsType) HasProfileId() bool`

HasProfileId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


