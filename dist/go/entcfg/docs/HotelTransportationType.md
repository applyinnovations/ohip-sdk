# HotelTransportationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | Pointer to **string** | Comments about the transportation. | [optional] 
**Description** | Pointer to **string** | The description of the transportation. | [optional] 
**KeyOptions** | Pointer to **[]string** |  | [optional] 
**Label** | Pointer to **string** |  | [optional] 
**OrderBy** | Pointer to **int32** |  | [optional] 
**PhoneNumber** | Pointer to [**TelephoneType**](TelephoneType.md) |  | [optional] 
**PriceRange** | Pointer to **string** | The price range of the transportation. | [optional] 
**RelativePosition** | Pointer to [**RelativePositionType**](RelativePositionType.md) |  | [optional] 
**TransportationCode** | Pointer to **string** |  | [optional] 
**Website** | Pointer to [**URLType**](URLType.md) |  | [optional] 

## Methods

### NewHotelTransportationType

`func NewHotelTransportationType() *HotelTransportationType`

NewHotelTransportationType instantiates a new HotelTransportationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelTransportationTypeWithDefaults

`func NewHotelTransportationTypeWithDefaults() *HotelTransportationType`

NewHotelTransportationTypeWithDefaults instantiates a new HotelTransportationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComments

`func (o *HotelTransportationType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *HotelTransportationType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *HotelTransportationType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *HotelTransportationType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetDescription

`func (o *HotelTransportationType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelTransportationType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelTransportationType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelTransportationType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetKeyOptions

`func (o *HotelTransportationType) GetKeyOptions() []string`

GetKeyOptions returns the KeyOptions field if non-nil, zero value otherwise.

### GetKeyOptionsOk

`func (o *HotelTransportationType) GetKeyOptionsOk() (*[]string, bool)`

GetKeyOptionsOk returns a tuple with the KeyOptions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKeyOptions

`func (o *HotelTransportationType) SetKeyOptions(v []string)`

SetKeyOptions sets KeyOptions field to given value.

### HasKeyOptions

`func (o *HotelTransportationType) HasKeyOptions() bool`

HasKeyOptions returns a boolean if a field has been set.

### GetLabel

`func (o *HotelTransportationType) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *HotelTransportationType) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *HotelTransportationType) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *HotelTransportationType) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetOrderBy

`func (o *HotelTransportationType) GetOrderBy() int32`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *HotelTransportationType) GetOrderByOk() (*int32, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *HotelTransportationType) SetOrderBy(v int32)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *HotelTransportationType) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetPhoneNumber

`func (o *HotelTransportationType) GetPhoneNumber() TelephoneType`

GetPhoneNumber returns the PhoneNumber field if non-nil, zero value otherwise.

### GetPhoneNumberOk

`func (o *HotelTransportationType) GetPhoneNumberOk() (*TelephoneType, bool)`

GetPhoneNumberOk returns a tuple with the PhoneNumber field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhoneNumber

`func (o *HotelTransportationType) SetPhoneNumber(v TelephoneType)`

SetPhoneNumber sets PhoneNumber field to given value.

### HasPhoneNumber

`func (o *HotelTransportationType) HasPhoneNumber() bool`

HasPhoneNumber returns a boolean if a field has been set.

### GetPriceRange

`func (o *HotelTransportationType) GetPriceRange() string`

GetPriceRange returns the PriceRange field if non-nil, zero value otherwise.

### GetPriceRangeOk

`func (o *HotelTransportationType) GetPriceRangeOk() (*string, bool)`

GetPriceRangeOk returns a tuple with the PriceRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceRange

`func (o *HotelTransportationType) SetPriceRange(v string)`

SetPriceRange sets PriceRange field to given value.

### HasPriceRange

`func (o *HotelTransportationType) HasPriceRange() bool`

HasPriceRange returns a boolean if a field has been set.

### GetRelativePosition

`func (o *HotelTransportationType) GetRelativePosition() RelativePositionType`

GetRelativePosition returns the RelativePosition field if non-nil, zero value otherwise.

### GetRelativePositionOk

`func (o *HotelTransportationType) GetRelativePositionOk() (*RelativePositionType, bool)`

GetRelativePositionOk returns a tuple with the RelativePosition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRelativePosition

`func (o *HotelTransportationType) SetRelativePosition(v RelativePositionType)`

SetRelativePosition sets RelativePosition field to given value.

### HasRelativePosition

`func (o *HotelTransportationType) HasRelativePosition() bool`

HasRelativePosition returns a boolean if a field has been set.

### GetTransportationCode

`func (o *HotelTransportationType) GetTransportationCode() string`

GetTransportationCode returns the TransportationCode field if non-nil, zero value otherwise.

### GetTransportationCodeOk

`func (o *HotelTransportationType) GetTransportationCodeOk() (*string, bool)`

GetTransportationCodeOk returns a tuple with the TransportationCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransportationCode

`func (o *HotelTransportationType) SetTransportationCode(v string)`

SetTransportationCode sets TransportationCode field to given value.

### HasTransportationCode

`func (o *HotelTransportationType) HasTransportationCode() bool`

HasTransportationCode returns a boolean if a field has been set.

### GetWebsite

`func (o *HotelTransportationType) GetWebsite() URLType`

GetWebsite returns the Website field if non-nil, zero value otherwise.

### GetWebsiteOk

`func (o *HotelTransportationType) GetWebsiteOk() (*URLType, bool)`

GetWebsiteOk returns a tuple with the Website field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebsite

`func (o *HotelTransportationType) SetWebsite(v URLType)`

SetWebsite sets Website field to given value.

### HasWebsite

`func (o *HotelTransportationType) HasWebsite() bool`

HasWebsite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


