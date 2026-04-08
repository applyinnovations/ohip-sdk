# HotelEventSpacesType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventSpaceDetails** | Pointer to [**[]HotelEventSpaceDetailType**](HotelEventSpaceDetailType.md) | List of detail info of hotel event space | [optional] 
**EventSpaceSummaries** | Pointer to [**[]HotelEventSpaceSummaryType**](HotelEventSpaceSummaryType.md) | List of summary info of hotel event space | [optional] 
**SetupStyles** | Pointer to **[]string** | List of event space setup style codes. | [optional] 

## Methods

### NewHotelEventSpacesType

`func NewHotelEventSpacesType() *HotelEventSpacesType`

NewHotelEventSpacesType instantiates a new HotelEventSpacesType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelEventSpacesTypeWithDefaults

`func NewHotelEventSpacesTypeWithDefaults() *HotelEventSpacesType`

NewHotelEventSpacesTypeWithDefaults instantiates a new HotelEventSpacesType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEventSpaceDetails

`func (o *HotelEventSpacesType) GetEventSpaceDetails() []HotelEventSpaceDetailType`

GetEventSpaceDetails returns the EventSpaceDetails field if non-nil, zero value otherwise.

### GetEventSpaceDetailsOk

`func (o *HotelEventSpacesType) GetEventSpaceDetailsOk() (*[]HotelEventSpaceDetailType, bool)`

GetEventSpaceDetailsOk returns a tuple with the EventSpaceDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventSpaceDetails

`func (o *HotelEventSpacesType) SetEventSpaceDetails(v []HotelEventSpaceDetailType)`

SetEventSpaceDetails sets EventSpaceDetails field to given value.

### HasEventSpaceDetails

`func (o *HotelEventSpacesType) HasEventSpaceDetails() bool`

HasEventSpaceDetails returns a boolean if a field has been set.

### GetEventSpaceSummaries

`func (o *HotelEventSpacesType) GetEventSpaceSummaries() []HotelEventSpaceSummaryType`

GetEventSpaceSummaries returns the EventSpaceSummaries field if non-nil, zero value otherwise.

### GetEventSpaceSummariesOk

`func (o *HotelEventSpacesType) GetEventSpaceSummariesOk() (*[]HotelEventSpaceSummaryType, bool)`

GetEventSpaceSummariesOk returns a tuple with the EventSpaceSummaries field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventSpaceSummaries

`func (o *HotelEventSpacesType) SetEventSpaceSummaries(v []HotelEventSpaceSummaryType)`

SetEventSpaceSummaries sets EventSpaceSummaries field to given value.

### HasEventSpaceSummaries

`func (o *HotelEventSpacesType) HasEventSpaceSummaries() bool`

HasEventSpaceSummaries returns a boolean if a field has been set.

### GetSetupStyles

`func (o *HotelEventSpacesType) GetSetupStyles() []string`

GetSetupStyles returns the SetupStyles field if non-nil, zero value otherwise.

### GetSetupStylesOk

`func (o *HotelEventSpacesType) GetSetupStylesOk() (*[]string, bool)`

GetSetupStylesOk returns a tuple with the SetupStyles field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetupStyles

`func (o *HotelEventSpacesType) SetSetupStyles(v []string)`

SetSetupStyles sets SetupStyles field to given value.

### HasSetupStyles

`func (o *HotelEventSpacesType) HasSetupStyles() bool`

HasSetupStyles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


