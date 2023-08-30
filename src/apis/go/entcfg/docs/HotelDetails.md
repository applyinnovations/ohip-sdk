# HotelDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelConfigInfo** | Pointer to [**HotelInfoType**](HotelInfoType.md) |  | [optional] 
**MasterInfoList** | Pointer to [**[]MasterInfoType**](MasterInfoType.md) | Refer to Generic common types document. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelDetails

`func NewHotelDetails() *HotelDetails`

NewHotelDetails instantiates a new HotelDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelDetailsWithDefaults

`func NewHotelDetailsWithDefaults() *HotelDetails`

NewHotelDetailsWithDefaults instantiates a new HotelDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelConfigInfo

`func (o *HotelDetails) GetHotelConfigInfo() HotelInfoType`

GetHotelConfigInfo returns the HotelConfigInfo field if non-nil, zero value otherwise.

### GetHotelConfigInfoOk

`func (o *HotelDetails) GetHotelConfigInfoOk() (*HotelInfoType, bool)`

GetHotelConfigInfoOk returns a tuple with the HotelConfigInfo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelConfigInfo

`func (o *HotelDetails) SetHotelConfigInfo(v HotelInfoType)`

SetHotelConfigInfo sets HotelConfigInfo field to given value.

### HasHotelConfigInfo

`func (o *HotelDetails) HasHotelConfigInfo() bool`

HasHotelConfigInfo returns a boolean if a field has been set.

### GetMasterInfoList

`func (o *HotelDetails) GetMasterInfoList() []MasterInfoType`

GetMasterInfoList returns the MasterInfoList field if non-nil, zero value otherwise.

### GetMasterInfoListOk

`func (o *HotelDetails) GetMasterInfoListOk() (*[]MasterInfoType, bool)`

GetMasterInfoListOk returns a tuple with the MasterInfoList field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMasterInfoList

`func (o *HotelDetails) SetMasterInfoList(v []MasterInfoType)`

SetMasterInfoList sets MasterInfoList field to given value.

### HasMasterInfoList

`func (o *HotelDetails) HasMasterInfoList() bool`

HasMasterInfoList returns a boolean if a field has been set.

### GetLinks

`func (o *HotelDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


