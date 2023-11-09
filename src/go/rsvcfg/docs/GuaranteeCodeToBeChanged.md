# GuaranteeCodeToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**GuaranteeCode** | Pointer to [**GuaranteeConfigType**](GuaranteeConfigType.md) |  | [optional] 
**HotelId** | Pointer to **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewGuaranteeCodeToBeChanged

`func NewGuaranteeCodeToBeChanged() *GuaranteeCodeToBeChanged`

NewGuaranteeCodeToBeChanged instantiates a new GuaranteeCodeToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuaranteeCodeToBeChangedWithDefaults

`func NewGuaranteeCodeToBeChangedWithDefaults() *GuaranteeCodeToBeChanged`

NewGuaranteeCodeToBeChangedWithDefaults instantiates a new GuaranteeCodeToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetGuaranteeCode

`func (o *GuaranteeCodeToBeChanged) GetGuaranteeCode() GuaranteeConfigType`

GetGuaranteeCode returns the GuaranteeCode field if non-nil, zero value otherwise.

### GetGuaranteeCodeOk

`func (o *GuaranteeCodeToBeChanged) GetGuaranteeCodeOk() (*GuaranteeConfigType, bool)`

GetGuaranteeCodeOk returns a tuple with the GuaranteeCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGuaranteeCode

`func (o *GuaranteeCodeToBeChanged) SetGuaranteeCode(v GuaranteeConfigType)`

SetGuaranteeCode sets GuaranteeCode field to given value.

### HasGuaranteeCode

`func (o *GuaranteeCodeToBeChanged) HasGuaranteeCode() bool`

HasGuaranteeCode returns a boolean if a field has been set.

### GetHotelId

`func (o *GuaranteeCodeToBeChanged) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *GuaranteeCodeToBeChanged) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *GuaranteeCodeToBeChanged) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *GuaranteeCodeToBeChanged) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetLinks

`func (o *GuaranteeCodeToBeChanged) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *GuaranteeCodeToBeChanged) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *GuaranteeCodeToBeChanged) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *GuaranteeCodeToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *GuaranteeCodeToBeChanged) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *GuaranteeCodeToBeChanged) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *GuaranteeCodeToBeChanged) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *GuaranteeCodeToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


