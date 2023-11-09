# AttractionCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**Class** | Pointer to **string** | The class of the attraction. | [optional] 
**Code** | Pointer to **string** |  | [optional] 
**DisplaySeq** | Pointer to **int32** | Display sequence of the attraction. | [optional] 
**GeneralDirections** | Pointer to **string** | Directions to the attraction from the hotel. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code for attraction. | [optional] 
**InactiveDate** | Pointer to **string** | The date the record was marked as inactive. | [optional] 
**Latitude** | Pointer to **float32** |  | [optional] 
**Longitude** | Pointer to **float32** | The longitude of the location from which the organism or observation was collected, expressed in decimal degrees. Positive values are East of the Greenwich Meridian, negative values are West of the Greenwich Meridian. | [optional] 
**Name** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**OperationHours** | Pointer to **string** | Price range for the attraction. | [optional] 
**PriceRange** | Pointer to **string** | Price range for the attraction. | [optional] 
**Region** | Pointer to **string** | The region in which this attraction is located. | [optional] 
**RelativePosition** | Pointer to [**RelativePositionType**](RelativePositionType.md) |  | [optional] 
**Type** | Pointer to **string** | The type of the attraction. | [optional] 
**Website** | Pointer to [**URLType**](URLType.md) |  | [optional] 

## Methods

### NewAttractionCodeType

`func NewAttractionCodeType() *AttractionCodeType`

NewAttractionCodeType instantiates a new AttractionCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttractionCodeTypeWithDefaults

`func NewAttractionCodeTypeWithDefaults() *AttractionCodeType`

NewAttractionCodeTypeWithDefaults instantiates a new AttractionCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *AttractionCodeType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *AttractionCodeType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *AttractionCodeType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *AttractionCodeType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetClass

`func (o *AttractionCodeType) GetClass() string`

GetClass returns the Class field if non-nil, zero value otherwise.

### GetClassOk

`func (o *AttractionCodeType) GetClassOk() (*string, bool)`

GetClassOk returns a tuple with the Class field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClass

`func (o *AttractionCodeType) SetClass(v string)`

SetClass sets Class field to given value.

### HasClass

`func (o *AttractionCodeType) HasClass() bool`

HasClass returns a boolean if a field has been set.

### GetCode

`func (o *AttractionCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AttractionCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AttractionCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AttractionCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDisplaySeq

`func (o *AttractionCodeType) GetDisplaySeq() int32`

GetDisplaySeq returns the DisplaySeq field if non-nil, zero value otherwise.

### GetDisplaySeqOk

`func (o *AttractionCodeType) GetDisplaySeqOk() (*int32, bool)`

GetDisplaySeqOk returns a tuple with the DisplaySeq field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySeq

`func (o *AttractionCodeType) SetDisplaySeq(v int32)`

SetDisplaySeq sets DisplaySeq field to given value.

### HasDisplaySeq

`func (o *AttractionCodeType) HasDisplaySeq() bool`

HasDisplaySeq returns a boolean if a field has been set.

### GetGeneralDirections

`func (o *AttractionCodeType) GetGeneralDirections() string`

GetGeneralDirections returns the GeneralDirections field if non-nil, zero value otherwise.

### GetGeneralDirectionsOk

`func (o *AttractionCodeType) GetGeneralDirectionsOk() (*string, bool)`

GetGeneralDirectionsOk returns a tuple with the GeneralDirections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralDirections

`func (o *AttractionCodeType) SetGeneralDirections(v string)`

SetGeneralDirections sets GeneralDirections field to given value.

### HasGeneralDirections

`func (o *AttractionCodeType) HasGeneralDirections() bool`

HasGeneralDirections returns a boolean if a field has been set.

### GetHotelId

`func (o *AttractionCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *AttractionCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *AttractionCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *AttractionCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactiveDate

`func (o *AttractionCodeType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *AttractionCodeType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *AttractionCodeType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *AttractionCodeType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetLatitude

`func (o *AttractionCodeType) GetLatitude() float32`

GetLatitude returns the Latitude field if non-nil, zero value otherwise.

### GetLatitudeOk

`func (o *AttractionCodeType) GetLatitudeOk() (*float32, bool)`

GetLatitudeOk returns a tuple with the Latitude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatitude

`func (o *AttractionCodeType) SetLatitude(v float32)`

SetLatitude sets Latitude field to given value.

### HasLatitude

`func (o *AttractionCodeType) HasLatitude() bool`

HasLatitude returns a boolean if a field has been set.

### GetLongitude

`func (o *AttractionCodeType) GetLongitude() float32`

GetLongitude returns the Longitude field if non-nil, zero value otherwise.

### GetLongitudeOk

`func (o *AttractionCodeType) GetLongitudeOk() (*float32, bool)`

GetLongitudeOk returns a tuple with the Longitude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongitude

`func (o *AttractionCodeType) SetLongitude(v float32)`

SetLongitude sets Longitude field to given value.

### HasLongitude

`func (o *AttractionCodeType) HasLongitude() bool`

HasLongitude returns a boolean if a field has been set.

### GetName

`func (o *AttractionCodeType) GetName() TranslationTextType2000`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttractionCodeType) GetNameOk() (*TranslationTextType2000, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttractionCodeType) SetName(v TranslationTextType2000)`

SetName sets Name field to given value.

### HasName

`func (o *AttractionCodeType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOperationHours

`func (o *AttractionCodeType) GetOperationHours() string`

GetOperationHours returns the OperationHours field if non-nil, zero value otherwise.

### GetOperationHoursOk

`func (o *AttractionCodeType) GetOperationHoursOk() (*string, bool)`

GetOperationHoursOk returns a tuple with the OperationHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationHours

`func (o *AttractionCodeType) SetOperationHours(v string)`

SetOperationHours sets OperationHours field to given value.

### HasOperationHours

`func (o *AttractionCodeType) HasOperationHours() bool`

HasOperationHours returns a boolean if a field has been set.

### GetPriceRange

`func (o *AttractionCodeType) GetPriceRange() string`

GetPriceRange returns the PriceRange field if non-nil, zero value otherwise.

### GetPriceRangeOk

`func (o *AttractionCodeType) GetPriceRangeOk() (*string, bool)`

GetPriceRangeOk returns a tuple with the PriceRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceRange

`func (o *AttractionCodeType) SetPriceRange(v string)`

SetPriceRange sets PriceRange field to given value.

### HasPriceRange

`func (o *AttractionCodeType) HasPriceRange() bool`

HasPriceRange returns a boolean if a field has been set.

### GetRegion

`func (o *AttractionCodeType) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AttractionCodeType) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AttractionCodeType) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AttractionCodeType) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRelativePosition

`func (o *AttractionCodeType) GetRelativePosition() RelativePositionType`

GetRelativePosition returns the RelativePosition field if non-nil, zero value otherwise.

### GetRelativePositionOk

`func (o *AttractionCodeType) GetRelativePositionOk() (*RelativePositionType, bool)`

GetRelativePositionOk returns a tuple with the RelativePosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelativePosition

`func (o *AttractionCodeType) SetRelativePosition(v RelativePositionType)`

SetRelativePosition sets RelativePosition field to given value.

### HasRelativePosition

`func (o *AttractionCodeType) HasRelativePosition() bool`

HasRelativePosition returns a boolean if a field has been set.

### GetType

`func (o *AttractionCodeType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttractionCodeType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttractionCodeType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttractionCodeType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetWebsite

`func (o *AttractionCodeType) GetWebsite() URLType`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *AttractionCodeType) GetWebsiteOk() (*URLType, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *AttractionCodeType) SetWebsite(v URLType)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *AttractionCodeType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


