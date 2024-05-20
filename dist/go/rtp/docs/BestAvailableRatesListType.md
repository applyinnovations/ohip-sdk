# BestAvailableRatesListType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BestAvailableRates** | Pointer to [**[]BestAvailableRateType**](BestAvailableRateType.md) | Collection of best available rates for rate code(s) | [optional] 
**HotelId** | Pointer to **string** | Hotel code for which best available rates will be considered. | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfo**](MasterInfo.md) | The list of references of rate code selected as best available rates | [optional] 

## Methods

### NewBestAvailableRatesListType

`func NewBestAvailableRatesListType() *BestAvailableRatesListType`

NewBestAvailableRatesListType instantiates a new BestAvailableRatesListType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBestAvailableRatesListTypeWithDefaults

`func NewBestAvailableRatesListTypeWithDefaults() *BestAvailableRatesListType`

NewBestAvailableRatesListTypeWithDefaults instantiates a new BestAvailableRatesListType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBestAvailableRates

`func (o *BestAvailableRatesListType) GetBestAvailableRates() []BestAvailableRateType`

GetBestAvailableRates returns the BestAvailableRates field if non-nil, zero value otherwise.

### GetBestAvailableRatesOk

`func (o *BestAvailableRatesListType) GetBestAvailableRatesOk() (*[]BestAvailableRateType, bool)`

GetBestAvailableRatesOk returns a tuple with the BestAvailableRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBestAvailableRates

`func (o *BestAvailableRatesListType) SetBestAvailableRates(v []BestAvailableRateType)`

SetBestAvailableRates sets BestAvailableRates field to given value.

### HasBestAvailableRates

`func (o *BestAvailableRatesListType) HasBestAvailableRates() bool`

HasBestAvailableRates returns a boolean if a field has been set.

### GetHotelId

`func (o *BestAvailableRatesListType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *BestAvailableRatesListType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *BestAvailableRatesListType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *BestAvailableRatesListType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *BestAvailableRatesListType) GetMasterInfoList() []MasterInfo`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *BestAvailableRatesListType) GetMasterInfoListOk() (*[]MasterInfo, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *BestAvailableRatesListType) SetMasterInfoList(v []MasterInfo)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *BestAvailableRatesListType) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


