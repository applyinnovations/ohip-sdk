# AttractionTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Address** | Pointer to [**AddressType**](AddressType.md) |  | [optional] 
**Class** | Pointer to **string** | The class of the attraction. | [optional] 
**Code** | Pointer to **string** |  | [optional] 
**DisplaySeq** | Pointer to **int32** | Display sequence of the attraction. | [optional] 
**GeneralDirections** | Pointer to **string** | Directions to the attraction from the hotel. | [optional] 
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

### NewAttractionTemplateType

`func NewAttractionTemplateType() *AttractionTemplateType`

NewAttractionTemplateType instantiates a new AttractionTemplateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttractionTemplateTypeWithDefaults

`func NewAttractionTemplateTypeWithDefaults() *AttractionTemplateType`

NewAttractionTemplateTypeWithDefaults instantiates a new AttractionTemplateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAddress

`func (o *AttractionTemplateType) GetAddress() AddressType`

GetAddress returns the Address field if non-nil, zero value otherwise.

### GetAddressOk

`func (o *AttractionTemplateType) GetAddressOk() (*AddressType, bool)`

GetAddressOk returns a tuple with the Address field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAddress

`func (o *AttractionTemplateType) SetAddress(v AddressType)`

SetAddress sets Address field to given value.

### HasAddress

`func (o *AttractionTemplateType) HasAddress() bool`

HasAddress returns a boolean if a field has been set.

### GetClass

`func (o *AttractionTemplateType) GetClass() string`

GetClass returns the Class field if non-nil, zero value otherwise.

### GetClassOk

`func (o *AttractionTemplateType) GetClassOk() (*string, bool)`

GetClassOk returns a tuple with the Class field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClass

`func (o *AttractionTemplateType) SetClass(v string)`

SetClass sets Class field to given value.

### HasClass

`func (o *AttractionTemplateType) HasClass() bool`

HasClass returns a boolean if a field has been set.

### GetCode

`func (o *AttractionTemplateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *AttractionTemplateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *AttractionTemplateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *AttractionTemplateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDisplaySeq

`func (o *AttractionTemplateType) GetDisplaySeq() int32`

GetDisplaySeq returns the DisplaySeq field if non-nil, zero value otherwise.

### GetDisplaySeqOk

`func (o *AttractionTemplateType) GetDisplaySeqOk() (*int32, bool)`

GetDisplaySeqOk returns a tuple with the DisplaySeq field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySeq

`func (o *AttractionTemplateType) SetDisplaySeq(v int32)`

SetDisplaySeq sets DisplaySeq field to given value.

### HasDisplaySeq

`func (o *AttractionTemplateType) HasDisplaySeq() bool`

HasDisplaySeq returns a boolean if a field has been set.

### GetGeneralDirections

`func (o *AttractionTemplateType) GetGeneralDirections() string`

GetGeneralDirections returns the GeneralDirections field if non-nil, zero value otherwise.

### GetGeneralDirectionsOk

`func (o *AttractionTemplateType) GetGeneralDirectionsOk() (*string, bool)`

GetGeneralDirectionsOk returns a tuple with the GeneralDirections field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGeneralDirections

`func (o *AttractionTemplateType) SetGeneralDirections(v string)`

SetGeneralDirections sets GeneralDirections field to given value.

### HasGeneralDirections

`func (o *AttractionTemplateType) HasGeneralDirections() bool`

HasGeneralDirections returns a boolean if a field has been set.

### GetInactiveDate

`func (o *AttractionTemplateType) GetInactiveDate() string`

GetInactiveDate returns the InactiveDate field if non-nil, zero value otherwise.

### GetInactiveDateOk

`func (o *AttractionTemplateType) GetInactiveDateOk() (*string, bool)`

GetInactiveDateOk returns a tuple with the InactiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactiveDate

`func (o *AttractionTemplateType) SetInactiveDate(v string)`

SetInactiveDate sets InactiveDate field to given value.

### HasInactiveDate

`func (o *AttractionTemplateType) HasInactiveDate() bool`

HasInactiveDate returns a boolean if a field has been set.

### GetLatitude

`func (o *AttractionTemplateType) GetLatitude() float32`

GetLatitude returns the Latitude field if non-nil, zero value otherwise.

### GetLatitudeOk

`func (o *AttractionTemplateType) GetLatitudeOk() (*float32, bool)`

GetLatitudeOk returns a tuple with the Latitude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLatitude

`func (o *AttractionTemplateType) SetLatitude(v float32)`

SetLatitude sets Latitude field to given value.

### HasLatitude

`func (o *AttractionTemplateType) HasLatitude() bool`

HasLatitude returns a boolean if a field has been set.

### GetLongitude

`func (o *AttractionTemplateType) GetLongitude() float32`

GetLongitude returns the Longitude field if non-nil, zero value otherwise.

### GetLongitudeOk

`func (o *AttractionTemplateType) GetLongitudeOk() (*float32, bool)`

GetLongitudeOk returns a tuple with the Longitude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLongitude

`func (o *AttractionTemplateType) SetLongitude(v float32)`

SetLongitude sets Longitude field to given value.

### HasLongitude

`func (o *AttractionTemplateType) HasLongitude() bool`

HasLongitude returns a boolean if a field has been set.

### GetName

`func (o *AttractionTemplateType) GetName() TranslationTextType2000`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttractionTemplateType) GetNameOk() (*TranslationTextType2000, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttractionTemplateType) SetName(v TranslationTextType2000)`

SetName sets Name field to given value.

### HasName

`func (o *AttractionTemplateType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOperationHours

`func (o *AttractionTemplateType) GetOperationHours() string`

GetOperationHours returns the OperationHours field if non-nil, zero value otherwise.

### GetOperationHoursOk

`func (o *AttractionTemplateType) GetOperationHoursOk() (*string, bool)`

GetOperationHoursOk returns a tuple with the OperationHours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperationHours

`func (o *AttractionTemplateType) SetOperationHours(v string)`

SetOperationHours sets OperationHours field to given value.

### HasOperationHours

`func (o *AttractionTemplateType) HasOperationHours() bool`

HasOperationHours returns a boolean if a field has been set.

### GetPriceRange

`func (o *AttractionTemplateType) GetPriceRange() string`

GetPriceRange returns the PriceRange field if non-nil, zero value otherwise.

### GetPriceRangeOk

`func (o *AttractionTemplateType) GetPriceRangeOk() (*string, bool)`

GetPriceRangeOk returns a tuple with the PriceRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceRange

`func (o *AttractionTemplateType) SetPriceRange(v string)`

SetPriceRange sets PriceRange field to given value.

### HasPriceRange

`func (o *AttractionTemplateType) HasPriceRange() bool`

HasPriceRange returns a boolean if a field has been set.

### GetRegion

`func (o *AttractionTemplateType) GetRegion() string`

GetRegion returns the Region field if non-nil, zero value otherwise.

### GetRegionOk

`func (o *AttractionTemplateType) GetRegionOk() (*string, bool)`

GetRegionOk returns a tuple with the Region field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegion

`func (o *AttractionTemplateType) SetRegion(v string)`

SetRegion sets Region field to given value.

### HasRegion

`func (o *AttractionTemplateType) HasRegion() bool`

HasRegion returns a boolean if a field has been set.

### GetRelativePosition

`func (o *AttractionTemplateType) GetRelativePosition() RelativePositionType`

GetRelativePosition returns the RelativePosition field if non-nil, zero value otherwise.

### GetRelativePositionOk

`func (o *AttractionTemplateType) GetRelativePositionOk() (*RelativePositionType, bool)`

GetRelativePositionOk returns a tuple with the RelativePosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelativePosition

`func (o *AttractionTemplateType) SetRelativePosition(v RelativePositionType)`

SetRelativePosition sets RelativePosition field to given value.

### HasRelativePosition

`func (o *AttractionTemplateType) HasRelativePosition() bool`

HasRelativePosition returns a boolean if a field has been set.

### GetType

`func (o *AttractionTemplateType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttractionTemplateType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttractionTemplateType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttractionTemplateType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetWebsite

`func (o *AttractionTemplateType) GetWebsite() URLType`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *AttractionTemplateType) GetWebsiteOk() (*URLType, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *AttractionTemplateType) SetWebsite(v URLType)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *AttractionTemplateType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


