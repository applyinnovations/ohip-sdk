# RestrictionsHistoryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RestrictionSets** | Pointer to [**[]RestrictionSetHistoryType**](RestrictionSetHistoryType.md) | Restriction set for a date range. | [optional] 
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 

## Methods

### NewRestrictionsHistoryType

`func NewRestrictionsHistoryType() *RestrictionsHistoryType`

NewRestrictionsHistoryType instantiates a new RestrictionsHistoryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionsHistoryTypeWithDefaults

`func NewRestrictionsHistoryTypeWithDefaults() *RestrictionsHistoryType`

NewRestrictionsHistoryTypeWithDefaults instantiates a new RestrictionsHistoryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRestrictionSets

`func (o *RestrictionsHistoryType) GetRestrictionSets() []RestrictionSetHistoryType`

GetRestrictionSets returns the RestrictionSets field if non-nil, zero value otherwise.

### GetRestrictionSetsOk

`func (o *RestrictionsHistoryType) GetRestrictionSetsOk() (*[]RestrictionSetHistoryType, bool)`

GetRestrictionSetsOk returns a tuple with the RestrictionSets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionSets

`func (o *RestrictionsHistoryType) SetRestrictionSets(v []RestrictionSetHistoryType)`

SetRestrictionSets sets RestrictionSets field to given value.

### HasRestrictionSets

`func (o *RestrictionsHistoryType) HasRestrictionSets() bool`

HasRestrictionSets returns a boolean if a field has been set.

### GetChainCode

`func (o *RestrictionsHistoryType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *RestrictionsHistoryType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *RestrictionsHistoryType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *RestrictionsHistoryType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetHotelId

`func (o *RestrictionsHistoryType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RestrictionsHistoryType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RestrictionsHistoryType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RestrictionsHistoryType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *RestrictionsHistoryType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *RestrictionsHistoryType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *RestrictionsHistoryType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *RestrictionsHistoryType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelName

`func (o *RestrictionsHistoryType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *RestrictionsHistoryType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *RestrictionsHistoryType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *RestrictionsHistoryType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *RestrictionsHistoryType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *RestrictionsHistoryType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *RestrictionsHistoryType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *RestrictionsHistoryType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetChainName

`func (o *RestrictionsHistoryType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *RestrictionsHistoryType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *RestrictionsHistoryType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *RestrictionsHistoryType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


