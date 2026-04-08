# ConfigHotelAmenityType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | The description about amenity of the hotel. | [optional] 
**Comments** | Pointer to **string** | The comments about amenity of the hotel. | [optional] 
**FeatureCode** | Pointer to **string** | Specifies the feature code (aka amenity code). | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**AmenityType** | Pointer to [**AmenityTypeType**](AmenityTypeType.md) |  | [optional] 
**BeginDate** | Pointer to **string** | The date the amenity is scheduled to become active. | [optional] 
**EndDate** | Pointer to **string** | The date the amenity is scheduled to become inactive. | [optional] 
**NewAmenityCode** | Pointer to **string** | The new amenity code which is used in the change method. | [optional] 
**NewBeginDate** | Pointer to **string** | The new date the amenity is scheduled to become active. | [optional] 
**Hours** | Pointer to **string** | The hours of operation of the amenity in the hotel. | [optional] 
**PriceRange** | Pointer to **string** | The price range of the amenity in the hotel. | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code for which the amenity is specified. | [optional] 

## Methods

### NewConfigHotelAmenityType

`func NewConfigHotelAmenityType() *ConfigHotelAmenityType`

NewConfigHotelAmenityType instantiates a new ConfigHotelAmenityType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigHotelAmenityTypeWithDefaults

`func NewConfigHotelAmenityTypeWithDefaults() *ConfigHotelAmenityType`

NewConfigHotelAmenityTypeWithDefaults instantiates a new ConfigHotelAmenityType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *ConfigHotelAmenityType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigHotelAmenityType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigHotelAmenityType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigHotelAmenityType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetComments

`func (o *ConfigHotelAmenityType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ConfigHotelAmenityType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ConfigHotelAmenityType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ConfigHotelAmenityType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetFeatureCode

`func (o *ConfigHotelAmenityType) GetFeatureCode() string`

GetFeatureCode returns the FeatureCode field if non-nil, zero value otherwise.

### GetFeatureCodeOk

`func (o *ConfigHotelAmenityType) GetFeatureCodeOk() (*string, bool)`

GetFeatureCodeOk returns a tuple with the FeatureCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFeatureCode

`func (o *ConfigHotelAmenityType) SetFeatureCode(v string)`

SetFeatureCode sets FeatureCode field to given value.

### HasFeatureCode

`func (o *ConfigHotelAmenityType) HasFeatureCode() bool`

HasFeatureCode returns a boolean if a field has been set.

### GetOrderSequence

`func (o *ConfigHotelAmenityType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *ConfigHotelAmenityType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *ConfigHotelAmenityType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *ConfigHotelAmenityType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetAmenityType

`func (o *ConfigHotelAmenityType) GetAmenityType() AmenityTypeType`

GetAmenityType returns the AmenityType field if non-nil, zero value otherwise.

### GetAmenityTypeOk

`func (o *ConfigHotelAmenityType) GetAmenityTypeOk() (*AmenityTypeType, bool)`

GetAmenityTypeOk returns a tuple with the AmenityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmenityType

`func (o *ConfigHotelAmenityType) SetAmenityType(v AmenityTypeType)`

SetAmenityType sets AmenityType field to given value.

### HasAmenityType

`func (o *ConfigHotelAmenityType) HasAmenityType() bool`

HasAmenityType returns a boolean if a field has been set.

### GetBeginDate

`func (o *ConfigHotelAmenityType) GetBeginDate() string`

GetBeginDate returns the BeginDate field if non-nil, zero value otherwise.

### GetBeginDateOk

`func (o *ConfigHotelAmenityType) GetBeginDateOk() (*string, bool)`

GetBeginDateOk returns a tuple with the BeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBeginDate

`func (o *ConfigHotelAmenityType) SetBeginDate(v string)`

SetBeginDate sets BeginDate field to given value.

### HasBeginDate

`func (o *ConfigHotelAmenityType) HasBeginDate() bool`

HasBeginDate returns a boolean if a field has been set.

### GetEndDate

`func (o *ConfigHotelAmenityType) GetEndDate() string`

GetEndDate returns the EndDate field if non-nil, zero value otherwise.

### GetEndDateOk

`func (o *ConfigHotelAmenityType) GetEndDateOk() (*string, bool)`

GetEndDateOk returns a tuple with the EndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEndDate

`func (o *ConfigHotelAmenityType) SetEndDate(v string)`

SetEndDate sets EndDate field to given value.

### HasEndDate

`func (o *ConfigHotelAmenityType) HasEndDate() bool`

HasEndDate returns a boolean if a field has been set.

### GetNewAmenityCode

`func (o *ConfigHotelAmenityType) GetNewAmenityCode() string`

GetNewAmenityCode returns the NewAmenityCode field if non-nil, zero value otherwise.

### GetNewAmenityCodeOk

`func (o *ConfigHotelAmenityType) GetNewAmenityCodeOk() (*string, bool)`

GetNewAmenityCodeOk returns a tuple with the NewAmenityCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewAmenityCode

`func (o *ConfigHotelAmenityType) SetNewAmenityCode(v string)`

SetNewAmenityCode sets NewAmenityCode field to given value.

### HasNewAmenityCode

`func (o *ConfigHotelAmenityType) HasNewAmenityCode() bool`

HasNewAmenityCode returns a boolean if a field has been set.

### GetNewBeginDate

`func (o *ConfigHotelAmenityType) GetNewBeginDate() string`

GetNewBeginDate returns the NewBeginDate field if non-nil, zero value otherwise.

### GetNewBeginDateOk

`func (o *ConfigHotelAmenityType) GetNewBeginDateOk() (*string, bool)`

GetNewBeginDateOk returns a tuple with the NewBeginDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewBeginDate

`func (o *ConfigHotelAmenityType) SetNewBeginDate(v string)`

SetNewBeginDate sets NewBeginDate field to given value.

### HasNewBeginDate

`func (o *ConfigHotelAmenityType) HasNewBeginDate() bool`

HasNewBeginDate returns a boolean if a field has been set.

### GetHours

`func (o *ConfigHotelAmenityType) GetHours() string`

GetHours returns the Hours field if non-nil, zero value otherwise.

### GetHoursOk

`func (o *ConfigHotelAmenityType) GetHoursOk() (*string, bool)`

GetHoursOk returns a tuple with the Hours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHours

`func (o *ConfigHotelAmenityType) SetHours(v string)`

SetHours sets Hours field to given value.

### HasHours

`func (o *ConfigHotelAmenityType) HasHours() bool`

HasHours returns a boolean if a field has been set.

### GetPriceRange

`func (o *ConfigHotelAmenityType) GetPriceRange() string`

GetPriceRange returns the PriceRange field if non-nil, zero value otherwise.

### GetPriceRangeOk

`func (o *ConfigHotelAmenityType) GetPriceRangeOk() (*string, bool)`

GetPriceRangeOk returns a tuple with the PriceRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceRange

`func (o *ConfigHotelAmenityType) SetPriceRange(v string)`

SetPriceRange sets PriceRange field to given value.

### HasPriceRange

`func (o *ConfigHotelAmenityType) HasPriceRange() bool`

HasPriceRange returns a boolean if a field has been set.

### GetHotelId

`func (o *ConfigHotelAmenityType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ConfigHotelAmenityType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ConfigHotelAmenityType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ConfigHotelAmenityType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


