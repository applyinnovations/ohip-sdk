# RestrictionsByDateRangeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RestrictionSets** | Pointer to [**[]RestrictionSetType**](RestrictionSetType.md) | Restriction set for a date range. | [optional] 
**ChainCode** | Pointer to **string** | The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute. | [optional] 
**HotelId** | Pointer to **string** | The code that uniquely identifies a single hotel property. The hotel code is decided between vendors. | [optional] 
**HotelCityCode** | Pointer to **string** | The IATA city code; for example DCA, ORD. | [optional] 
**HotelName** | Pointer to **string** | A text field used to communicate the proper name of the hotel. | [optional] 
**HotelCodeContext** | Pointer to **string** | A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes. | [optional] 
**ChainName** | Pointer to **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | [optional] 
**HasMore** | Pointer to **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | [optional] 
**TotalResults** | Pointer to **int32** | Total number of rows queried | [optional] 
**Count** | Pointer to **int32** | Total number of rows returned | [optional] 

## Methods

### NewRestrictionsByDateRangeType

`func NewRestrictionsByDateRangeType() *RestrictionsByDateRangeType`

NewRestrictionsByDateRangeType instantiates a new RestrictionsByDateRangeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRestrictionsByDateRangeTypeWithDefaults

`func NewRestrictionsByDateRangeTypeWithDefaults() *RestrictionsByDateRangeType`

NewRestrictionsByDateRangeTypeWithDefaults instantiates a new RestrictionsByDateRangeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRestrictionSets

`func (o *RestrictionsByDateRangeType) GetRestrictionSets() []RestrictionSetType`

GetRestrictionSets returns the RestrictionSets field if non-nil, zero value otherwise.

### GetRestrictionSetsOk

`func (o *RestrictionsByDateRangeType) GetRestrictionSetsOk() (*[]RestrictionSetType, bool)`

GetRestrictionSetsOk returns a tuple with the RestrictionSets field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestrictionSets

`func (o *RestrictionsByDateRangeType) SetRestrictionSets(v []RestrictionSetType)`

SetRestrictionSets sets RestrictionSets field to given value.

### HasRestrictionSets

`func (o *RestrictionsByDateRangeType) HasRestrictionSets() bool`

HasRestrictionSets returns a boolean if a field has been set.

### GetChainCode

`func (o *RestrictionsByDateRangeType) GetChainCode() string`

GetChainCode returns the ChainCode field if non-nil, zero value otherwise.

### GetChainCodeOk

`func (o *RestrictionsByDateRangeType) GetChainCodeOk() (*string, bool)`

GetChainCodeOk returns a tuple with the ChainCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainCode

`func (o *RestrictionsByDateRangeType) SetChainCode(v string)`

SetChainCode sets ChainCode field to given value.

### HasChainCode

`func (o *RestrictionsByDateRangeType) HasChainCode() bool`

HasChainCode returns a boolean if a field has been set.

### GetHotelId

`func (o *RestrictionsByDateRangeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RestrictionsByDateRangeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RestrictionsByDateRangeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RestrictionsByDateRangeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHotelCityCode

`func (o *RestrictionsByDateRangeType) GetHotelCityCode() string`

GetHotelCityCode returns the HotelCityCode field if non-nil, zero value otherwise.

### GetHotelCityCodeOk

`func (o *RestrictionsByDateRangeType) GetHotelCityCodeOk() (*string, bool)`

GetHotelCityCodeOk returns a tuple with the HotelCityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCityCode

`func (o *RestrictionsByDateRangeType) SetHotelCityCode(v string)`

SetHotelCityCode sets HotelCityCode field to given value.

### HasHotelCityCode

`func (o *RestrictionsByDateRangeType) HasHotelCityCode() bool`

HasHotelCityCode returns a boolean if a field has been set.

### GetHotelName

`func (o *RestrictionsByDateRangeType) GetHotelName() string`

GetHotelName returns the HotelName field if non-nil, zero value otherwise.

### GetHotelNameOk

`func (o *RestrictionsByDateRangeType) GetHotelNameOk() (*string, bool)`

GetHotelNameOk returns a tuple with the HotelName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelName

`func (o *RestrictionsByDateRangeType) SetHotelName(v string)`

SetHotelName sets HotelName field to given value.

### HasHotelName

`func (o *RestrictionsByDateRangeType) HasHotelName() bool`

HasHotelName returns a boolean if a field has been set.

### GetHotelCodeContext

`func (o *RestrictionsByDateRangeType) GetHotelCodeContext() string`

GetHotelCodeContext returns the HotelCodeContext field if non-nil, zero value otherwise.

### GetHotelCodeContextOk

`func (o *RestrictionsByDateRangeType) GetHotelCodeContextOk() (*string, bool)`

GetHotelCodeContextOk returns a tuple with the HotelCodeContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCodeContext

`func (o *RestrictionsByDateRangeType) SetHotelCodeContext(v string)`

SetHotelCodeContext sets HotelCodeContext field to given value.

### HasHotelCodeContext

`func (o *RestrictionsByDateRangeType) HasHotelCodeContext() bool`

HasHotelCodeContext returns a boolean if a field has been set.

### GetChainName

`func (o *RestrictionsByDateRangeType) GetChainName() string`

GetChainName returns the ChainName field if non-nil, zero value otherwise.

### GetChainNameOk

`func (o *RestrictionsByDateRangeType) GetChainNameOk() (*string, bool)`

GetChainNameOk returns a tuple with the ChainName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChainName

`func (o *RestrictionsByDateRangeType) SetChainName(v string)`

SetChainName sets ChainName field to given value.

### HasChainName

`func (o *RestrictionsByDateRangeType) HasChainName() bool`

HasChainName returns a boolean if a field has been set.

### GetHasMore

`func (o *RestrictionsByDateRangeType) GetHasMore() bool`

GetHasMore returns the HasMore field if non-nil, zero value otherwise.

### GetHasMoreOk

`func (o *RestrictionsByDateRangeType) GetHasMoreOk() (*bool, bool)`

GetHasMoreOk returns a tuple with the HasMore field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasMore

`func (o *RestrictionsByDateRangeType) SetHasMore(v bool)`

SetHasMore sets HasMore field to given value.

### HasHasMore

`func (o *RestrictionsByDateRangeType) HasHasMore() bool`

HasHasMore returns a boolean if a field has been set.

### GetTotalResults

`func (o *RestrictionsByDateRangeType) GetTotalResults() int32`

GetTotalResults returns the TotalResults field if non-nil, zero value otherwise.

### GetTotalResultsOk

`func (o *RestrictionsByDateRangeType) GetTotalResultsOk() (*int32, bool)`

GetTotalResultsOk returns a tuple with the TotalResults field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalResults

`func (o *RestrictionsByDateRangeType) SetTotalResults(v int32)`

SetTotalResults sets TotalResults field to given value.

### HasTotalResults

`func (o *RestrictionsByDateRangeType) HasTotalResults() bool`

HasTotalResults returns a boolean if a field has been set.

### GetCount

`func (o *RestrictionsByDateRangeType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RestrictionsByDateRangeType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RestrictionsByDateRangeType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RestrictionsByDateRangeType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


